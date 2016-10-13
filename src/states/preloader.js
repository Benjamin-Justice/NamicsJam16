class Preloader extends Phaser.State {

    constructor() {
        super();
        this.asset = null;
        this.ready = false;
    }

    preload() {
        //setup loading bar
        this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
        this.load.setPreloadSprite(this.asset);

        //Setup loading and its events
        //this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        this.loadResources();
    }

    update() {
        // if (this.ready) {
        this.game.state.start('game');
        // }
    }

    loadResources() {
        // load your resources here
        this.game.load.spritesheet('bricksspritesheet', 'assets/bricks.png', 64, 32, 20, 1);
        this.game.load.image('starfield', 'assets/misc/starfield.jpg');
        this.game.load.image('paddle', 'assets/paddle.png');
        this.game.load.image('ball', 'assets/ball.png');
    }

    onLoadComplete() {
        this.ready = true;
    }
}

export default Preloader;
