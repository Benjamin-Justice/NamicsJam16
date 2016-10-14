import Constants from '../util/constants';
import NormalBrick from './normalbrick';
import SolidBrick from './solidbrick';
import MultiBrick from './multibrick';
import BallMultiplierBrick from './ballmultiplierbrick';

class Brick extends Phaser.Sprite {
    constructor(game, x, y, brickType) {
        super(game, x, y, "bricksspritesheet");
        this.brickType = brickType;
        this.initPhysics();
        this.initSound();
        let sound;

    }

    initPhysics() {
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.body.bounce.set(1);
        this.body.immovable = true;
    }

    initSound() {
      this.sound = this.game.add.audio(this.brickType.sound);
    }

    hit() {
        this.brickType.hit();
        this.sound.play();
    }

    isDestroyed() {
        return this.brickType.isDestroyed();
    }

    isBallMultiplierBrick() {
        return this.brickType.getName() === 'ballmultiplier';
    }

    getPoints() {
        return this.brickType.getPoints();
    }

    update() {
        this.frame = this.brickType.getFrame();
    }
}

export default Brick;
