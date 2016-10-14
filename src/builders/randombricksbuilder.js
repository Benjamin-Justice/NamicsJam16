import Constants from '../util/constants';
import Brick from '../prefabs/brick';
import NormalBrick from '../prefabs/normalbrick';
import SolidBrick from '../prefabs/solidbrick';
import MultiBrick from '../prefabs/multibrick';
import BallMultiplierBrick from '../prefabs/ballmultiplierbrick';

const BRICK_TYPES = [{type:'normal', factor:50}, {type:'nobrick', factor:30}, {type:'solid', factor:5}, {type:'multi', factor:10}, {type:'ballmultiplier', factor:1}];

class RandomBricksBuilder {
    constructor(game, bricksGroup) {
        this.game = game;
        this.bricksGroup = bricksGroup;
        this.brickTypeNames = this.createTypeNames();
        this.cntSolidBricks = 0;
        this.cntDestroyableBricks = 0;
    }

    createTypeNames() {
        var brickTypeNames = [];
        for (var i=0; i< BRICK_TYPES.length; i++) {
            var brickType = BRICK_TYPES[i];
            for (var factor = 0; factor <= brickType.factor; factor++) {
                brickTypeNames.push(brickType.type);
            }
        }
        console.log('bricktypenames', brickTypeNames);
        return brickTypeNames;
    }

    addBricks() {
        for (var y = 50; y < 250; y+=40) {
            for (var x = 100; x < 900; x += 70) {
                var brickTypeName = this.randomBrickTypeNames();
                this.addBrick(brickTypeName, x, y);
            }
        }
    }

    addBrick(brickTypeName, x, y) {
        var brickType = undefined;
        switch(brickTypeName) {
            case 'normal':
                brickType = new NormalBrick();
                this.cntDestroyableBricks++;
                break;
            case 'solid':
                brickType = new SolidBrick();
                this.cntSolidBricks++;
                break;
            case 'multi':
                brickType = new MultiBrick();
                this.cntDestroyableBricks++;
                break;
            case 'ballmultiplier':
                brickType = new BallMultiplierBrick();
                this.cntDestroyableBricks++;
                break;
        }
        if (brickType !== undefined) {
            console.log('bricktype', brickType.getName());
            this.bricksGroup.add(new Brick(this.game, x, y, brickType));
        }
    }

    randomBrickTypeNames() {
        var random_number = Math.round(Math.random()*(this.brickTypeNames.length - 1));
        console.log(random_number);
        return this.brickTypeNames[random_number];
    }

    getCntSolidBricks() {
        return this.cntSolidBricks;
    }

    getCntDestroyableBricks() {
        return this.cntDestroyableBricks;
    }
}

export default RandomBricksBuilder;