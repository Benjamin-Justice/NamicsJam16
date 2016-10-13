import Constants from '../util/constants';
import Brick from '../prefabs/brick';
import Utils from '../util/utils';

class Game extends Phaser.State {

  constructor() {
    super();
  }

  preload() {
    this.addBasicGroups();
    this.addBricks();
  }

  create() {
    Utils.loadBackground(this.game)
    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'Game', {
      font: '42px Arial', fill: '#ffffff', align: 'center'
    });
    text.anchor.set(0.5);

    this.input.onDown.add(this.endGame, this);
  }

  update() {

  }

  endGame() {
    this.game.state.start('gameover');
  }

  addBasicGroups() {
    let rootGroup = this.game.add.group('', Constants.GROUP_ROOT);
    let uiGroup = this.game.add.group(Constants.GROUP_ROOT, Constants.GROUP_UI);
    let bricksGroup = this.game.add.group(Constants.GROUP_ROOT, Constants.GROUP_BRICKS);
    let playerGroup = this.game.add.group(Constants.GROUP_ROOT, Constants.GROUP_PLAYER);
    let ballGroup = this.game.add.group(Constants.GROUP_ROOT, Constants.GROUP_BALL);
  }

  addBricks() {
    var brick = new Brick(this, 200, 200);
    this.game.add.existing(brick);
  }
}

export default Game;
