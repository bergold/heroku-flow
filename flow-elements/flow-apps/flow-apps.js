Polymer('flow-apps', {

  onAppTap: function(e, d, s) {
    s.setAttribute('hero', '');
    this.fire('app-select', s.getAttribute('data-app'), this, true, true);
  },

  liftup: function(e, d, s) {
    s.setZ(1);
  },
  liftdown: function(e, d, s) {
    s.setZ(0)
  }

});
