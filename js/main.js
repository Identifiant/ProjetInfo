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

require(['phaser','Menu'], function(phaser,Menu) {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    platforms = game.add.group();

    var menu;

    function preload() {
        //chargement du jeu.
    }



    function create() {            
        cursors = game.input.keyboard.createCursorKeys();
        menu = new Menu();
        menu.makeMenu(game);


    }




    function update() {
        // boucle qui fait la logique du jeu.
        menu.update(cursors);


    }

});
