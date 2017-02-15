define(['phaser'],function(phaser){


    var menu = function(game){
        this.select;
        var playerAsPush =0;

        this.makeMenu = function(game){

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

            var option2 = game.add.text(400,400,'Multijoueurs',{fill:'white'}); 
            option2.anchor.x = 0.6;
            option2.anchor.y = 0.5;
            /* *********** pseudo bouton de selection *********** */

            this.select = game.add.text(290,200,'>',{fill: 'white'});
            this.select.anchor.x = 0.5;
            this.select.anchor.y = 0.5;

        };

        this.update = function(cursors){

            if ((cursors.down.isDown ||cursors.up.isDown )&& !playerAsPush)
            {
                if(this.select.y == 200){
                    this.select.y = 400;

                }else{
                    this.select.y = 200;

                }
                playerAsPush =1;

                setTimeout(replace,100);

            }
        };


        function replace(){
            playerAsPush= 0;


        }






    };


    return menu;
});