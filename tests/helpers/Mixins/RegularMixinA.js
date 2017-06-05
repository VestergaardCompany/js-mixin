'use strict';

/**
 * width symbol
 *
 * @type {Symbol}
 * @private
 */
const _width = Symbol('width');

/**
 * Regular Mixin A Mixin
 *
 * @return {RegularMixinA}
 */
export default (superClass) => class RegularMixinA extends superClass {

    /**
     * Set width
     *
     * @param {number|null} width The width of something
     */
    set width(width) {
        this[_width] = width;
    }

    /**
     * Get width
     *
     * @return {number|null} The width of something
     */
    get width() {
        if (!this.hasWidth()) {
            this.width = this.defaultWidth;
        }
        return this[_width];
    }

    /**
     * Check if "width" has been set
     *
     * @return {boolean}
     */
    hasWidth() {
        return (this[_width] !== undefined && this[_width] !== null);
    }

    /**
     * Get a default "width"
     *
     * @return {number|null} A default "width" value or null if none is available
     */
    get defaultWidth() {
        return null;
    }
};