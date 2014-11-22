Polymer('flow-console', {

  letterWidth: 9,
  letterHeight: 17,

  domReady: function() {

    this.$.keysEnter.addEventListener('keys-pressed', this._execute.bind(this));
    //this.$.keysSelect.addEventListener('keys-pressed', this._updateCursor.bind(this));
    //this.$.keysHistoryDown.addEventListener('keys-pressed', this.historyDown.bind(this));
    //this.$.keysHistoryUp.addEventListener('keys-pressed', this.historyUp.bind(this));

    this.$.stdin.addEventListener('select', this._updateCursor.bind(this));
    this.$.stdin.addEventListener('input', this._updateInput.bind(this));
    this.addEventListener('click', function() {
      this.$.stdin.focus();
    }.bind(this));

    this.addEventListener('keydown', function(e) {
      var k = e.keyIdentifier;
      if (k == 'Home' || k == 'End' || k == 'Left' || k == 'Right') this.async(this._updateCursor.bind(this));
    }.bind(this));

    this.$.stdin.addEventListener('focus', function() {
      this.$.cursor.classList.add('active');
    }.bind(this));
    this.$.stdin.addEventListener('blur', function() {
      this.$.cursor.classList.remove('active');
    }.bind(this));

    this._lineBreak();
    this._updateCursor();

  },

  write: function(txt) {
    var lines = txt.split('\n');
    for (var i = 0; i < lines.length; i++) {
      if (i !== 0) this._lineBreak();
      this._append(lines[i]);
    }
    this._updateCursor();
  },

  _execute: function() {
    var cmd = this.$.stdin.value;
    this.async(function() {
      this.fire('command', { 'command': cmd }, this, false);
    });
    this.write(cmd + '\n');
    this.$.stdin.value = '';
    this._updateInput();
  },

  _updateInput: function() {
    var val = this.$.stdin.value;
    var inp = this._lastLine('.input');
    inp.textContent = val;
    this._updateCursor();
  },

  _updateCursor: function() {
    var inp = this._lastLine('.input');
    var top = inp.offsetTop;
    var left = inp.offsetLeft;
    var height = this.letterHeight;
    var width = this.letterWidth;

    var s = this.$.stdin.selectionStart;
    left = left + width * s;

    this.$.cursor.style.top = top + 'px';
    this.$.cursor.style.left = left + 'px';
    this.$.cursor.style.height = height + 'px';
    this.$.cursor.style.width = width + 'px';

    this._scrollDown();
  },

  _scrollDown: function() {
    var s = this.$.screen;
    s.scrollTop = s.scrollHeight - s.clientHeight;
  },

  _append: function(content) {
    var l = this._lastLine('.output');
    l.textContent = l.textContent + content;
  },

  _lastLine: function(query) {
    var l = this.$.lines.lastChild;
    return query === undefined ? l : l.querySelector(query);
  },

  _lineBreak: function() {
    var l = this._lastLine();
    var init = l === null;
    var line = document.createElement('div');
    var out = document.createElement('span');
    var inp;

    if (init) {
      inp = document.createElement('span');
      inp.classList.add('input');
    } else {
      o = l.querySelector('.output');
      o.textContent = o.textContent + '\n';
      inp = l.removeChild(l.querySelector('.input'));
    }

    out.classList.add('output');

    line.classList.add('line');
    line.appendChild(out);
    line.appendChild(inp);

    this.$.lines.appendChild(line);
  }

});
