define(function(require, exports, module) {

  // var heroku = require('heroku');
  // var flow = require('./flow.js');

  var app = document.querySelector('flow-app');

  exports.init = function() {

    app.goto('app');
    app.apps = [
      'app1',
      'app2'
    ];

  };

});
