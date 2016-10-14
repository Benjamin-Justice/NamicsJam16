import Constants from '../util/constants';
import Brick from '../prefabs/brick';
import NormalBrick from '../prefabs/normalbrick';
import SolidBrick from '../prefabs/solidbrick';
import MultiBrick from '../prefabs/multibrick';
import BallMultiplierBrick from '../prefabs/ballmultiplierbrick';

class RandomBricksBuilder {
    constructor(game, bricksGroup) {
        this.game = game;
        this.bricksGroup = bricksGroup;
        this.brickTypes = [new NormalBrick(), new NormalBrick(), new NormalBrick(), undefined, undefined, new SolidBrick(), new MultiBrick(), new BallMultiplierBrick()];
    }

    addBricks() {
        for (var y = 50; y < 250; y+=40) {
            for (var x = 100; x < 900; x += 70) {
                var brickType = this.randomBrickType();
                if (brickType !== undefined) {
                    this.bricksGroup.add(new Brick(this.game, x, y, brickType));
                }
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