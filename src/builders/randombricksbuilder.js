import Constants from '../util/constants';
import Brick from '../prefabs/brick';

class RandomBricksBuilder {
    constructor(game, bricksGroup) {
        this.game = game;
        this.bricksGroup = bricksGroup;
        this.brickTypes = [Constants.BRICK_RED, Constants.BRICK_YELLOW, Constants.Brick_LILAC, Constants.BRICK_WHITE, Constants.BRICK_GREEN];
    }

    addBricks() {
        for (var y = 50; y < 250; y+=40) {
            for (var x = 100; x < 900; x += 70) {
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

export default RandomBricksBuilder;