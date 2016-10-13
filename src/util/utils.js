class Utils {

    constructor() {
    }

    static loadBackground(game) {
        game.add.tileSprite(game.width * 0.5 - 400, game.height * 0.5 - 524, 1024, 1024, 'castle');
    }

}

export default Utils;
