Polymer('flow-app', {

  domReady: function() {

  },

  goto: function(page, app) {
    this.$.pagehost.selected = page;
    this.$.app.app = app;
  }

});
