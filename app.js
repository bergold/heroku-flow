require.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        pkg: '../packages'
    }
});

require(['app/main']);
