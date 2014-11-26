define(function(require, exports, module) {

  // var heroku = require('heroku');
  // var flow = require('./flow.js');

  var app = document.querySelector('flow-app');

  exports.init = function() {

    window.setTimeout(function() {
      app.goto('apps');
      app.apps = [
        {
          "buildpack_provided_description": "Ruby/Rack",
          "name": "example",
          "released_at": "2012-01-01T12:00:00Z",
          "updated_at": "2012-01-01T12:00:00Z",
          "web_url": "https://example.herokuapp.com/"
        },
        {
          "buildpack_provided_description": "NodeJS",
          "name": "example-2",
          "released_at": "2012-01-01T12:00:00Z",
          "updated_at": "2012-01-01T12:00:00Z",
          "web_url": "https://example.herokuapp.com/"
        }
      ];
    }, 2000);

    app.addEventListener('app-select', function(e) {
      app.goto('app', e.detail);
    });

  };

});
