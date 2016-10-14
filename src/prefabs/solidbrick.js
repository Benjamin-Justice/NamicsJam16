import Constants from '../util/constants';
import NormalBrick from './normalbrick';

class SolidBrick extends NormalBrick {
    constructor() {
        super();
    }

    isDestroyed() {
        return false;
    }

    getFrame() {
        return Constants.BRICK_YELLOW;
    }

    getPoints() {
        return 0;
    }

    getName() {
        return 'solid';
    }
}
export default SolidBrick;