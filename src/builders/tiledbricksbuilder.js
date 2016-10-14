import Constants from '../util/constants';
import Brick from '../prefabs/brick';

const BRICK_VALUE_NONE = 0;
const BRICK_VALUE_RED = 1;
const BRICK_VALUE_YELLOW = 3;
const BRICK_VALUE_WHITE = 7;

class TiledBricksBuilder {
    constructor(fileName, game, bricksGroup) {
        this.filePath = 'tiled/' + fileName + '.json';
        game.load.json('bricksJson', this.filePath);
        this.game = game;
        this.bricksGroup = bricksGroup;
        this.cntSolidBricks = 0;
        this.cntDestroyableBricks = 0;
    }

    addBricks() {
        var bricksJSON = this.game.cache.getJSON('bricksJson');
        if (bricksJSON) {
            if (bricksJSON.layers && bricksJSON.layers.length >= 1 && bricksJSON.layers[0].data) {
                var bricksLayer = bricksJSON.layers[0];
                this.addFromBricksData(bricksLayer.data, bricksLayer.height, bricksLayer.width);
            } else {
                console.error('Unexpected tiled format:', this.filePath);
            }
        } else {
            console.error('Tiled file not found:', this.filePath);
        }
    }

    addFromBricksData(bricksDataArray, height, width) {
        var i = 0;
        for(var y=0; y<height; y++) {
            for(var x=0; x<width; x++) {
                var brickValue = bricksDataArray[i];
                this.addBrick(brickValue, x, y);
                i++;
            }
        }
    }

    addBrick(brickValue, x, y) {
        var brickType;
        if (brickValue === BRICK_VALUE_NONE) {
            brickType = undefined;
        } else if (brickValue === BRICK_VALUE_WHITE) {
            brickType = Constants.BRICK_WHITE;
            this.cntDestroyableBricks++;
        } else if (brickValue === BRICK_VALUE_YELLOW) {
            brickType = Constants.BRICK_YELLOW;
            this.cntSolidBricks++;
        } else if (brickValue === BRICK_VALUE_GREEN) {
            brickType = Constants.BRICK_GREEN;
            this.cntSolidBricks++;
        } else {
            brickType = Constants.BRICK_RED;
            this.cntDestroyableBricks++;
        }
        if (brickType !== undefined) {
            var brick = new Brick(this.game, x * 64, y * 32, brickType);
            this.bricksGroup.add(brick);
        }
    }

    getCntSolidBricks() {
        return this.cntSolidBricks;
    }

    getCntDestroyableBricks() {
        return this.cntDestroyableBricks;
    }
}

export default TiledBricksBuilder;