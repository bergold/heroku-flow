
window.addEventListener('polymer-ready', function(e) {

  var app = document.querySelector('flow-app');
  app.$.pagehost.selected = 'app';

  app.shadowRoot.querySelector("flow-app-details").$.navigation.selected = "dynos"

});
