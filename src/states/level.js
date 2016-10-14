import Constants from '../util/constants';
import RandomBricksBuilder from '../builders/randombricksbuilder'
import TiledBricksBuilder from '../builders/tiledbricksbuilder'
import Utils from '../util/utils';
import Paddle from '../prefabs/paddle';
import Ball from '../prefabs/ball';
import Score from '../util/score';
import Lives from '../util/lives';
import ballHitPaddle from '../util/ballHitPaddle';

class Level extends Phaser.State {


    constructor() {
        super();
        this.initializeGame();
    }

    initializeGame() {
        this.score = new Score();
        this.lives = new Lives(3);
    }

    preload() {
        Utils.loadRandomBackground(this.game);
        this.addBasicGroups();
        //this.bricksBuilder = new RandomBricksBuilder(this, this.bricksGroup);
        this.bricksBuilder = new TiledBricksBuilder('snake', this, this.bricksGroup);
        this.game.add.existing(this.rootGroup);
    }

    create() {
        this.physics.arcade.checkCollision.down = false;

        this.bricksBuilder.addBricks();
        this.addPaddle();
        this.addBall();

        var spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.togglePause, this);
    }

    update() {
        this.game.physics.arcade.collide(this.ballGroup, this.playerGroup, ballHitPaddle, null, this);
        this.game.physics.arcade.collide(this.ballGroup, this.bricksGroup, this.ballHitBrick, null, this);
    }

    endGame() {
        this.initializeGame();
        this.game.state.start('gameover');
    }

    addBasicGroups() {
        this.rootGroup = this.game.add.group('', Constants.GROUP_ROOT);
        this.uiGroup = this.game.add.group(Constants.GROUP_ROOT, Constants.GROUP_UI);
        this.bricksGroup = this.game.add.group(Constants.GROUP_ROOT, Constants.GROUP_BRICKS);
        this.playerGroup = this.game.add.group(Constants.GROUP_ROOT, Constants.GROUP_PLAYER);
        this.ballGroup = this.game.add.group(Constants.GROUP_ROOT, Constants.GROUP_BALL);
    }

    ballHitBrick(ball, brick) {
        this.destroyBrick(brick);
    }

    destroyBrick(brick) {
        brick.hit();
        if (brick.isDestroyed()) {
            brick.destroy();
            this.score.add(brick.getPoints())
        }
        console.log(this.bricksGroup.children.length );
        if (this.bricksGroup.children.length == 0){
            this.endGame();
        }
    }

    getPoints() {

    }

    addPaddle() {
        var paddle = new Paddle(this.game, this.game.canvas.width / 2, this.game.canvas.height - 100);
        this.playerGroup.add(paddle);
    }

    addBall() {
        let ball = new Ball(this.game, 0, 0);
        ball.resetBall();
        this.ballGroup.add(ball);
        ball.events.onOutOfBounds.add(this.ballLost, this);
    }

    ballLost() {
        this.lives.decrement();
        console.log(this.lives);
        if (this.lives.isEmpty()) {
            this.endGame();
        } else {
            this.ballGroup.children[0].resetBall();
            this.playerGroup.children[0].resetPaddle();
        }
    }

    togglePause() {
        this.physics.arcade.isPaused = (this.physics.arcade.isPaused) ? false : true;
    }

}

export default Level;
