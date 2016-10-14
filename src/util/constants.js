/**
 * Created by ceckert on 13.10.2016.
 */
class Constants {
    constructor() {
        this.GROUP_ROOT = 'root';
        this.GROUP_UI = 'ui-group';
        this.GROUP_BRICKS = 'bricks-group';
        this.GROUP_PLAYER = 'player-group';
        this.GROUP_BALL = 'ball-group';
    }

    static get BRICK_RED() {
        return 0;
    }
    static get BRICK_YELLOW() {
        return 2;
    }
    static get BRICK_LILAC() {
        return 4;
    }
    static get BRICK_WHITE() {
        return 6;
    }
    static get BRICK_WHITE_1() {
        return 10;
    }
    static get BRICK_WHITE_2() {
        return 11;
    }
    static get BRICK_GREEN() {
        return 7;
    }

    static get MAPS() {
        return ['irgendwas', 'lab', 'rob', 'snake'];
    }
}

export default Constants;
