'use strict';

/**
 * height symbol
 *
 * @type {Symbol}
 * @private
 */
const _height = Symbol('height');

/**
 * Regular Mixin B Mixin
 *
 * @return {RegularMixinB}
 */
export default (superClass) => class RegularMixinB extends superClass {

    /**
     * Set height
     *
     * @param {number|null} height The height of something
     */
    set height(height) {
        this[_height] = height;
    }

    /**
     * Get height
     *
     * @return {number|null} The height of something
     */
    get height() {
        if (!this.hasHeight()) {
            this.height = this.defaultHeight;
        }
        return this[_height];
    }

    /**
     * Check if "height" has been set
     *
     * @return {boolean}
     */
    hasHeight() {
        return (this[_height] !== undefined && this[_height] !== null);
    }

    /**
     * Get a default "height"
     *
     * @return {number|null} A default "height" value or null if none is available
     */
    get defaultHeight() {
        return null;
    }
};