import Paddle from '../prefabs/paddle.js';

class Game extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'Game', {
      font: '42px Arial', fill: '#ffffff', align: 'center'
    });
    text.anchor.set(0.5);

    this.input.onDown.add(this.endGame, this);
    var paddle = new Paddle(this.game, 0, 0);
    this.game.add.existing(paddle);
  }

  update() {

  }

  endGame() {
    this.game.state.start('gameover');
  }

}

export default Game;
