class Brick extends Phaser.Sprite {
    constructor(game, x, y, frame) {
        super(game, x, y, "bricksspritesheet", frame);
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
    }

    update() {

    }
}

export default Brick;