class Brick extends Phaser.Sprite {
    constructor(game, x, y, frame) {
        super(game, x, y, "bricksspritesheet", frame);
        this.initPhysics();
    }

    initPhysics() {
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.body.bounce.set(1);
        this.body.immovable = true;
    }

    update() {

    }
}

export default Brick;