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
    }

    saveVarsToLocalStorage() {

    }

    resetGlobalVariables() {

    }

    update() {
    }

    restartGame() {
        this.resetGlobalVariables();
        this.game.state.start('level');
    }

}

export default Menu;
