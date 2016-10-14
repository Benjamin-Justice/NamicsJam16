import Constants from '../util/constants';

class Brick extends Phaser.Sprite {
    constructor(game, x, y, frame) {
        super(game, x, y, "bricksspritesheet", frame);
        this.isSolid = frame == Constants.BRICK_YELLOW;
        this.isMultiBrick = frame == Constants.BRICK_WHITE;
        this.hitCnt = 0;
        this.initPhysics();
    }

    initPhysics() {
        this.game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.body.bounce.set(1);
        this.body.immovable = true;
    }

    hit() {
        this.hitCnt++;
        if (this.isMultiBrick) {
            if (this.hitCnt == 1) {
                this.frame = Constants.BRICK_WHITE_2;
            } else if (this.hitCnt == 2) {
                this.frame = Constants.BRICK_WHITE_1;
            }
        }
    }

    isDestroyed() {
        if(this.isSolid) {
            return false;
        }
        if (this.isMultiBrick) {
            return this.hitCnt >= 3;
        }
        return this.hitCnt >= 1;
    }

    update() {

    }
}

export default Brick;