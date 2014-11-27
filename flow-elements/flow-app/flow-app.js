Polymer('flow-app', {

  domReady: function() {
    this.$.pagehost.addEventListener('core-animated-pages-transition-end', this.pageLoadEnd.bind(this));
  },

  goto: function(page, app) {
    this.$.pagehost.selected = page;
    this.$.apps.app = app;
    this.$.app.app = app;
  },

  pageLoadEnd: function() {
    var el = this.$.pagehost.selectedItem;
    if (el && el.show) el.show();
  }

});
