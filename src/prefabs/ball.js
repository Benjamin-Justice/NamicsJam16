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
        this.initInput();
    }

    initInput() {
        this.inputEnabled = true;
        this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
        this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    }

    update() {
        this.updateInput();
    }

    updateInput() {
        if (this.upKey.isDown) {
            if (this.width < 100 ) {
              this.width = this.width + 5;
              this.height = this.width + 5;
            }
        }
        else if (this.downKey.isDown) {
            if (this.width > 30 ){
              this.width = this.width - 5;
              this.height = this.width + 5;
            }
        }
        else {
            //
        }
    }

    resetBall() {
        this.reset(this.game.canvas.width / 2, this.game.canvas.height - 100 - this.width);
        this.setVelocity();
    }

    setVelocity() {
        this.body.velocity.y = -300;
        this.body.velocity.x = -75;
    }

}
export default Ball;
