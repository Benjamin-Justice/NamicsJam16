/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2015 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

/**
 * The PhysicsBody component manages the Game Objects physics body and physics enabling.
 * It also overrides the x and y properties, ensuring that any manual adjustment of them is reflected in the physics body itself.
 *
 * @class
 */
Phaser.Component.PhysicsBody = function () {};

/**
 * The PhysicsBody component preUpdate handler.
 * Called automatically by the Game Object.
 *
 * @method
 */
Phaser.Component.PhysicsBody.preUpdate = function () {

    return true;

};

/**
 * The PhysicsBody component postUpdate handler.
 * Called automatically by the Game Object.
 *
 * @method
 */
Phaser.Component.PhysicsBody.postUpdate = function () {

};

Phaser.Component.PhysicsBody.prototype = {

};