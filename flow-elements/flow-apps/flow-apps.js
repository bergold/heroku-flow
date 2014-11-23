Polymer('flow-apps', {

  appsChanged: function(oldVal, newVal) {
    this.$.applist.textContent = newVal.toString();
  }

});
