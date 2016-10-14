class Menu extends Phaser.State {

    constructor() {
        super();
    }

    create() {
        var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, 'Gameover', {
            font: '42px Arial', fill: '#ffffff', align: 'center'
        });
        text.anchor.set(0.5);

        var restartText = this.add.text(this.game.width * 0.5, this.game.height * 0.57, '- click to restart -', {
            font: '26px Arial', fill: '#ffffff', align: 'center'
        });
        restartText.anchor.set(0.5);

        this.saveVarsToLocalStorage();

        this.input.onDown.add(this.restartGame, this);
        var spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.restartGame, this);
        var escapeKey = this.input.keyboard.addKey(Phaser.Keyboard.ESC);
        escapeKey.onDown.add(this.restartGame, this);

        this.pad1 = this.game.input.gamepad.pad1;
    }

    saveVarsToLocalStorage() {

    }

    resetGlobalVariables() {

    }

    update() {
        if (this.anyButtonPressed()) {
            this.restartGame();
        }

    }

    anyButtonPressed() {
        if (this.pad1.justPressed(Phaser.Gamepad.XBOX360_A) ||
            this.pad1.justPressed(Phaser.Gamepad.XBOX360_B) ||
            this.pad1.justPressed(Phaser.Gamepad.XBOX360_Y) ||
            this.pad1.justPressed(Phaser.Gamepad.XBOX360_X) ||
            this.pad1.justPressed(Phaser.Gamepad.XBOX360_START)) {
            return true;
        } else {
            return false;
        }
    }

    restartGame() {
        this.resetGlobalVariables();
        this.game.state.start('level');
    }

}

export default Menu;
