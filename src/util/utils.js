class Utils {

    constructor() {
    }

    static loadBackground(game) {
        game.add.tileSprite(game.width * 0.5 - 512, game.height * 0.5 - 524, 1024, 1024, 'castle');
    }

    static loadBackground(game, name) {
        game.add.tileSprite(game.width * 0.5 - 512, game.height * 0.5 - 524, 1024, 1024, name);
    }

    static loadRandomBackground(game) {
        var backgrounds = ['castle', 'desert', 'forest', 'hills', 'peaks', 'piramids', 'plain', 'talltrees'];
        var index = Utils.getRandomInt(0, backgrounds.length);
        game.add.tileSprite(game.width * 0.5 - 512, game.height * 0.5 - 524, 1024, 1024, backgrounds[index]);
    }

    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

}

export default Utils;
