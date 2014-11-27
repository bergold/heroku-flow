Polymer('flow-apps', {

  show: function() {
    var items = this.shadowRoot.querySelectorAll('paper-item');
    items.array().forEach(function(item) { item.removeAttribute('hero'); });
  },

  onAppTap: function(e, d, s) {
    s.setAttribute('hero', '');
    this.fire('app-select', s.getAttribute('data-app'));
  }

});
