class Init extends Phaser.Scene{
    constructor() {
        super('Init')
    }

    preload(){
       
        this.load.image('initial_screen', '/img/initial_screen.png')

        this.load.image('play_button', '/img/play_button.png')
        //this.load.spritesheet('play_button', '/img/play_button.png', 193, 71);

        this.load.image('options_button', '/img/options_button.png')

        this.load.audio('title_music', './music/title.mp3')

        this.load.audio('click_song', './music/click_song.mp3')
        
    }

    create(){

        this.initial_screen = this.add.image(0,0,'initial_screen').setOrigin(0,0)

        this.play_song('title_music', true)

        this.play_button = this.add.image(400,440, 'play_button')
        this.play_button.setInteractive()
        this.play_button.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.play_song('click_song', false)
            console.log('pressioned')
            
        })

        this.options_button = this.add.image(400,480,'options_button')

        
        
    }

    update(){

        

    }

    play_song(name_music, execute_loop){

        this.sound.pauseOnBlur = false

        this.music =  this.sound.add(name_music, {
            volume: 0.2,
            loop: execute_loop
        })

        this.music.play()
    }

}

function up() {
    console.log('button up', arguments);
}

function over() {
    console.log('button over');
}

function out() {
    console.log('button out');
}

function actionOnClick () {

    background.visible =! background.visible;

}