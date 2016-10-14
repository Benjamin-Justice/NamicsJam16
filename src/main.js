import Boot from './states/boot';
import Level from './states/level';
import Preloader from './states/preloader';
import Gameover from './states/gameover';


const game = new Phaser.Game(1024, 576, Phaser.AUTO, 'NamicsJam16-game');

game.state.add('boot', new Boot());
game.state.add('level', new Level());
game.state.add('preloader', new Preloader());
game.state.add('gameover', new Gameover());

game.state.start('boot');
