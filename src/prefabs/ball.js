class Ball extends Phaser.Sprite {

    constructor(game, x, y, key, frame) {
        super(game, x, y, "ball", frame);
        this.origWidth = this.scale.x;
        this.origHeight = this.scale.y;

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
    }

    update() {
        this.updateInput();
    }

    updateInput() {
        if (this.upKey.isDown) {
            if (this.scale.x < 4 ) {
              this.scale.x = this.scale.x + 0.2;
              this.scale.y = this.scale.y + 0.2;
            }
        }
        else if (this.upKey.isUp) {
          for (let i = 0; i < 10; i++) {
            if (this.scale.x > this.origWidth ) {
              this.scale.x = this.scale.x - 0.01;
              this.scale.y = this.scale.y - 0.01;
            }
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
