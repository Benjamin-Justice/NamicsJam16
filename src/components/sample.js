/**
 * The PhysicsBody component manages the Game Objects physics body and physics enabling.
 * It also overrides the x and y properties, ensuring that any manual adjustment of them is reflected in the physics body itself.
 *
 * @class
 */
Phaser.Component.Sample = function () {};



Phaser.Component.Sample.prototype = {

    /**
     * The PhysicsBody component preUpdate handler.
     * Called automatically by the Game Object.
     *
     * @method
     */
    preUpdate: function () {

        return true;

    },

    /**
     * Override this method in your own custom objects to handle any update requirements.
     * It is called immediately after `preUpdate` and before `postUpdate`.
     * Remember if this Game Object has any children you should call update on those too.
     *
     * @method
     */
    update: function() {

    },

    /**
     * The PhysicsBody component postUpdate handler.
     * Called automatically by the Game Object.
     *
     * @method
     */
    postUpdate: function () {

    }
};