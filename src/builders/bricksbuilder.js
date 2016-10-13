import Brick from '../prefabs/brick';

class BricksBuilder {
    constructor(game, bricksGroup) {
        this.game = game;
        this.bricksGroup = bricksGroup;
    }

    addBricks() {
        var brick = new Brick(this.game, 200, 200);
        this.bricksGroup.add(brick);
    }
}

export default BricksBuilder;