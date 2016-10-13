class Paddle extends Phaser.Sprite {

    constructor(game, x, y, key, frame) {
        super(game, x, y, "paddle", frame);
        let leftKey;
        let rightKey;
        this.inputEnabled = true;
        this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);

        this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        this.movespeed = 20;

        this.game.physics.enable(this, Phaser.Physics.ARCADE);
    }

    update() {
        this.updateInput();
    }

    updateInput() {
        if (this.leftKey.isDown) {
            this.body.velocity.x = -this.movespeed * this.game.time.elapsed;
        }
        else if (this.rightKey.isDown) {
            this.body.velocity.x = this.movespeed * this.game.time.elapsed;
        }
        else {
            this.body.velocity.x = 0;
        }
    }
}
export default Paddle;
