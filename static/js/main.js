let game

window.onload = function(){

    const config = {
        type: Phaser.Canvas,
        width: 921,
        height: 870,
        scene: [Init,
                Scene01]
    }

    game = new Phaser.Game(config)

}