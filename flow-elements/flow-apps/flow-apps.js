Polymer('flow-apps', {

  onAppTap: function(e, d, s) {
    s.setAttribute('hero', '');
    this.fire('app-select', s.getAttribute('data-app'));
  },

  liftup: function(e, d, s) {
    s.style.zIndex = 1;
    s.setZ(1);
  },
  liftdown: function(e, d, s) {
    s.style.zIndex = 0;
    s.setZ(0);
  }

});
