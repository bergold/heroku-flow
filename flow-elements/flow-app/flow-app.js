Polymer('flow-app', {

  domReady: function() {

  },

  goto: function(page, app) {
    this.$.pagehost.selected = page;
    this.$.apps.app = app;
    this.$.app.app = app;
  }

});
