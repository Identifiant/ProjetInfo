require.config({
    baseUrl: 'js',
    paths: {
        jquery:     'libs/jquery',
        handlebars: 'libs/handlebars',
        text:       'libs/text',
        observable: 'libs/observable',
        templates:  '../templates',
        phaser :    'libs/phaser'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

require(['phaser'], function(phaser) {


});
