class Utils {

    constructor() {
    }

    static loadBackground(game) {
        game.add.tileSprite(game.width * 0.5 - 400, game.height * 0.5 - 300, 800, 600, 'starfield');
    }

}

export default Utils;
