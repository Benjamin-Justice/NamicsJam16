import Constants from '../util/constants';
import BricksBuilder from '../builders/bricksbuilder'
import Utils from '../util/utils';
import Paddle from '../prefabs/paddle';

class Game extends Phaser.State {

    constructor() {
        super();
    }

    preload() {
        Utils.loadBackground(this.game)
        this.addBasicGroups();
        new BricksBuilder(this, this.bricksGroup).addBricks();
        this.game.add.existing(this.rootGroup);
    }

    create() {
        var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'Game', {
            font: '42px Arial', fill: '#ffffff', align: 'center'
        });
        text.anchor.set(0.5);

        this.input.onDown.add(this.endGame, this);
        this.addPaddle();
    }

    update() {

    }

    endGame() {
        this.game.state.start('gameover');
    }

    addBasicGroups() {
        this.rootGroup = this.game.add.group('', Constants.GROUP_ROOT);
        this.uiGroup = this.game.add.group(Constants.GROUP_ROOT, Constants.GROUP_UI);
        this.bricksGroup = this.game.add.group(Constants.GROUP_ROOT, Constants.GROUP_BRICKS);
        this.playerGroup = this.game.add.group(Constants.GROUP_ROOT, Constants.GROUP_PLAYER);
        this.ballGroup = this.game.add.group(Constants.GROUP_ROOT, Constants.GROUP_BALL);
    }

    addPaddle() {
        var paddle = new Paddle(this.game, this.game.canvas.width/2, this.game.canvas.height - 100);
        paddle.body.collideWorldBounds = true;
        this.game.add.existing(paddle);
    }
}

export default Game;
