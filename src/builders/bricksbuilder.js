import Constants from '../util/constants';
import Brick from '../prefabs/brick';

class BricksBuilder {
    constructor(game, bricksGroup) {
        this.game = game;
        this.bricksGroup = bricksGroup;

        this.brickTypes = [0,2,4,6,7];
    }

    addBricks() {
        this.randomBricks();
    }

    randomBricks() {
        for (var y = 100; y < 300; y+=40) {
            for (var x = 100; x < 700; x += 70) {
                this.bricksGroup.add(new Brick(this.game, x, y, this.randomBrickType()));
            }
        }
    }

    randomBrickType() {
        var random_number = Math.round(Math.random()*(this.brickTypes.length - 1));
        console.log(random_number);
        return this.brickTypes[random_number];
    }
}

export default BricksBuilder;