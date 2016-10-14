 import Boot from './states/boot';
 import Game from './states/game';
 import Preloader from './states/preloader';
 import Gameover from './states/gameover';


const game = new Phaser.Game(1024, 576, Phaser.AUTO, 'NamicsJam16-game');

 game.state.add('boot', new Boot());
 game.state.add('game', new Game());
 game.state.add('preloader', new Preloader());
 game.state.add('gameover', new Gameover());

game.state.start('boot');
