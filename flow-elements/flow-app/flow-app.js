Polymer('flow-app', {

  domReady: function() {

  },

  goto: function(page) {
    this.$.pagehost.selected = page;
  },

  appsChanged: function(oldVal, newVal) {
    this.$.apps.apps = newVal;
  }

});
