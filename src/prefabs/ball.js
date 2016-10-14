class Ball extends Phaser.Sprite {

    constructor(game, x, y, key, frame) {
        super(game, x, y, "ball", frame);

        this.game.physics.enable(this, Phaser.Physics.ARCADE);


        this.anchor.set(0.5);
        this.checkWorldBounds = true;

        this.game.physics.enable(this, Phaser.Physics.ARCADE);

        this.body.collideWorldBounds = true;
        this.body.bounce.set(1);
        this.setVelocity();
    }

    update() {
        this.updateInput();
    }

    updateInput() {

    }

    resetBall() {
        this.reset(0, 0);
        this.setVelocity();
    }

    setVelocity() {
        this.body.velocity.y = -300;
        this.body.velocity.x = -75;
    }

}
export default Ball;
