import Constants from '../util/constants';
import NormalBrick from './normalbrick';

class BallMultiplierBrick extends NormalBrick {
    constructor() {
        super();
    }

    getFrame() {
        return Constants.BRICK_GREEN;
    }

    getName() {
        return 'ballmultiplier';
    }
}
export default BallMultiplierBrick;