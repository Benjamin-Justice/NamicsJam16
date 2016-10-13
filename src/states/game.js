class Game extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    this.game.add.tileSprite(0, 0, 800, 600, 'starfield');

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

}

export default Game;
