require.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        pkg: '../packages'
    }
});

var scriptsReady = new Promise(function(resolve, reject) {
  require(['app/main'], resolve);
});

var componentsReady = new Promise(function(resolve, reject) {
  window.addEventListener('polymer-ready', resolve);
});

Promise.all([scriptsReady, componentsReady]).then(function(result) {
  result[0].init();
});
