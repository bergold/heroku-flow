Polymer('flow-app-details', {

  domReady: function() {

    this.$.toggleNav.addEventListener('click', this.onToggleNav.bind(this));
    this.$.navigation.addEventListener('core-select', this.onMenuCoreSelect.bind(this));

  },

  onMenuCoreSelect: function(e) {
    this.$.pagehost.selected = this.$.navigation.selected;
    this.$.navdrawer.closeDrawer();
  },

  onToggleNav: function() {
    if (this.$.appsnav.hasAttribute('hidden')) {
      this.$.toggleNav.icon = 'arrow-drop-up';
      this.$.navigation.setAttribute('hidden', '');
      this.$.appsnav.removeAttribute('hidden');
    } else {
      this.$.toggleNav.icon = 'arrow-drop-down';
      this.$.navigation.removeAttribute('hidden');
      this.$.appsnav.setAttribute('hidden', '');
    }
  }

});
