Polymer('flow-app-details', {

  domReady: function() {

    this.$.toggleNav.addEventListener('click', this.toggleAppsnav.bind(this));
    this.$.appsnav.addEventListener('core-collapse-open', this.updateToggleButtonIcon.bind(this));
    //this.$.appsnav.addEventListener('core-select', this.selectApp.bind(this));
    this.$.navigation.addEventListener('core-select', this.selectPage.bind(this));
    this.$.navdrawer.addEventListener('core-select', this.closeAppsnav.bind(this));

  },

  selectPage: function() {
    this.$.pagehost.selected = this.$.navigation.selected;
    this.$.navdrawer.closeDrawer();
  },

  toggleAppsnav: function() {
    this.$.appsnav.toggle();
  },

  closeAppsnav: function() {
    this.$.appsnav.opened = false;
  },

  updateToggleButtonIcon: function() {
    if (this.$.appsnav.opened) this.$.toggleNav.icon = 'arrow-drop-up';
    else this.$.toggleNav.icon = 'arrow-drop-down';
  },

  selectApp: function(e, d, s) {
    this.fire('app-select', s.getAttribute('name'));
    this.$.navdrawer.closeDrawer();
  },

  selectApps: function() {
    this.$.navdrawer.closeDrawer();
    this.async(this.fire, ['apps-select'], 500);
  },

  appChanged: function(oldval, newVal) {
    this.$.appsnav.querySelector('core-menu').selected = newVal;
  }

});
