import Constants from '../util/constants';
import BricksBuilder from '../builders/bricksbuilder'
import Utils from '../util/utils';
import Paddle from '../prefabs/paddle';
import Ball from '../prefabs/ball';

class Level extends Phaser.State {

    constructor() {
        super();
        let lives;
    }

    preload() {
        Utils.loadRandomBackground(this.game);
        this.addBasicGroups();
        new BricksBuilder(this, this.bricksGroup).addBricks();
        this.game.add.existing(this.rootGroup);
    }

    create() {
        this.physics.arcade.checkCollision.down = false;
        this.lives = 3;

        this.addPaddle();
        this.addBall();
    }

    update() {
        this.game.physics.arcade.collide(this.ballGroup, this.playerGroup, this.ballHitPaddle);
        this.game.physics.arcade.collide(this.ballGroup, this.bricksGroup, this.ballHitPaddle);
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

    ballHitPaddle() {
        console.log('Treffer !');
    }

    addPaddle() {
        var paddle = new Paddle(this.game, this.game.canvas.width / 2, this.game.canvas.height - 100);
        this.playerGroup.add(paddle);
    }

    addBall() {
        let ball = new Ball(this.game, 0, 0)
        this.ballGroup.add(ball)
        ball.events.onOutOfBounds.add(this.ballLost, this);
    }

    ballLost() {
        this.lives -= 1;

        if (this.lives == 0) {
            this.endGame();
        } else {
            this.ballGroup.children[0].resetBall();
        }
    }

}

export default Level;
