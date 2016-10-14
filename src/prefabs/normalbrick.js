import Constants from '../util/constants';

class NormalBrick {
    constructor() {
        this.isHit = false;
        this.sound = 'normalBrickSound';
    }


    hit() {
        this.isHit = true;
    }

    isDestroyed() {
        return this.isHit;
    }

    getPoints() {
        return 1;
    }

    getFrame() {
        return Constants.BRICK_RED;
    }

    getName() {
        return 'normal';
    }
}
export default NormalBrick;
