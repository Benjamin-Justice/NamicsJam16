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
    }

    initPhysics() {
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.body.bounce.set(1);
        this.body.immovable = true;
    }

    hit() {
        this.brickType.hit();
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