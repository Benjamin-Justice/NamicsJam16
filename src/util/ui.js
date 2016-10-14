class UI {

    constructor(game, uiGroup, score, lives, levelName) {
        this.game = game;
        this.score = score;
        this.lives = lives;
        this.levelName = levelName;
        let webFontConfig;
        let text;
        this.initUI();
    }

    initUI() {
        this.createText();
    }

    createText() {
        console.log("create tetxts")
        this.text = this.game.add.text(10, 10, "Score: ");
        this.text.font = 'Orbitron';
        this.text.fontSize = 24;
        this.text.fill = "#fff";
        this.text.setShadow(2, 2, 'rgba(0,0,0,0.5)', 5);
    }

    update() {
        if (this.text) {
            this.text.text = "Level: " + this.levelName + "\n";
            this.text.text += "Score: " + this.score.get() * 1000 + "\n";
            this.text.text += "Lives: " + this.lives.get();
        }

    }
}

export default UI;