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
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    var select, playerAsPush;

    function preload() {
        //chargement du jeu.
    }
    platforms = game.add.group();


    function create() {
        cursors = game.input.keyboard.createCursorKeys();
        //création des élèments du jeu a partir de ce qui a été chargé.
        var titleMenu = game.add.text(400,60, 'Notre jeu', { fontSize: '60px', fill: 'white' });
        /* *********** titre *********** */

        titleMenu.anchor.x =0.6 ;
        titleMenu.anchor.y =0.6 ;
        /* *********** option 1 *********** */

        var option1 = game.add.text(400,200,'Jouez !',{fill: 'white'});
        option1.anchor.x = 0.7;
        option1.anchor.y = 0.5;
        /* *********** option 2 *********** */

        var option2 = game.add.text(400,400,'Multijoueur',{fill:'white'}); 
        option2.anchor.x = 0.6;
        option2.anchor.y = 0.5;
        /* *********** pseudo bouton de selection *********** */

        select = game.add.text(300,200,'>',{fill: 'white'});
        select.anchor.x = 0.5;
        select.anchor.y = 0.5;




    }

    function replace(){
        playerAsPush =0;

        
    }
    
    
    function update() {
        // boucle qui fait la logique du jeu.
        
        if ((cursors.down.isDown ||cursors.up.isDown )&& !playerAsPush)
        {
            if(select.y == 200){
                select.y = 400;
                
            }else{
                select.y = 200;

            }
            playerAsPush =1;
            setTimeout(replace,100);
            
        }

    }

});
