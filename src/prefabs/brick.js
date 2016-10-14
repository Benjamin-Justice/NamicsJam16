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

    particleBurst(emitter) {
        emitter.x = this.x;
        emitter.y = this.y;

        //  The first parameter sets the effect to "explode" which means all particles are emitted at once
        //  The second gives each particle a 2000ms lifespan
        //  The third is ignored when using burst/explode mode
        //  The final parameter (10) is how many particles will be emitted in this single burst
        emitter.start(true, 2000, null, 10);

    }
}

export default Brick;
