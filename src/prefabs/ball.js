class Ball extends Phaser.Sprite {

    constructor(game, x, y, key, frame) {
        super(game, x, y, "ball", frame);

        this.game.physics.enable(this, Phaser.Physics.ARCADE);


        this.anchor.set(0.5);
        this.checkWorldBounds = true;

        this.game.physics.enable(this, Phaser.Physics.ARCADE);

        this.body.collideWorldBounds = true;
        this.body.bounce.set(1);

        this.body.velocity.y = -300;
        this.body.velocity.x = -75;

    }

    update() {
        this.updateInput();
    }

    updateInput() {

    }
}
export default Ball;
