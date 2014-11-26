Polymer('flow-app', {

  domReady: function() {

  },

  goto: function(page, app) {
    this.$.pagehost.selected = page;
    if (app) this.$.app.app = app;
  }

});
