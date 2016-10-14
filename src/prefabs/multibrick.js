import Constants from '../util/constants';
import NormalBrick from './normalbrick';

class MultiBrick extends NormalBrick {
    constructor() {
        super();
        this.frame = Constants.BRICK_WHITE;
        this.hits = 0;
        this.sound = 'multyBrickSound';
    }

    hit() {
        this.hits++;
        if (this.hits === 1) {
            this.frame = Constants.BRICK_WHITE_2;
        } else if (this.hits === 2) {
            this.frame = Constants.BRICK_WHITE_1;
        }
    }

    getFrame() {
        return this.frame;
    }

    isDestroyed() {
        return this.hits >= 3;
    }

    getPoints() {
        return 3;
    }

    getName() {
        return 'multibrick';
    }
}
export default MultiBrick;
