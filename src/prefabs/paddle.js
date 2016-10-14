class Paddle extends Phaser.Sprite {

    constructor(game, x, y, key, frame) {
        super(game, x, y, "paddle", frame);
        let leftKey;
        let rightKey;
        let pad1;

        this.movespeed = 20;

        this.anchor.setTo(0.5, 0.5);
        this.initPhysics();
        this.initInput();
    }

    initPhysics() {
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.body.bounce.set(1);
        this.body.immovable = true;
    }

    initInput() {
        this.inputEnabled = true;
        this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

        this.game.input.gamepad.start();
        this.pad1 = this.game.input.gamepad.pad1;
    }

    update() {
        this.updateInput();
    }

    updateInput() {
        if (this.leftKey.isDown || this.pad1Left()) {
            this.body.velocity.x = -this.movespeed * this.game.time.elapsed;
        }
        else if (this.rightKey.isDown || this.pad1Right()) {
            this.body.velocity.x = this.movespeed * this.game.time.elapsed;
        }
        else {
            this.body.velocity.x = 0;
        }
    }

    pad1Left() {
        return this.pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) || this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1;
    }

    pad1Right() {
        return this.pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) || this.pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1;
    }

    resetPaddle() {
        this.reset(this.game.canvas.width / 2, this.game.canvas.height - 100);
    }



}
export default Paddle;
