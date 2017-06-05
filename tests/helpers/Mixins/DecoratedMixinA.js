'use strict';

import DeclareMixin from './../../../src/declare';

/**
 * width symbol
 *
 * @type {Symbol}
 * @private
 */
const _width = Symbol('width');

/**
 * Decorated Mixin A Mixin
 *
 * @return {DecoratedMixinA}
 */
export default DeclareMixin((superClass) => class DecoratedMixinA extends superClass {

    /**
     * Set width
     *
     * @param {number|null} width Width of something
     */
    set width(width) {
        this[_width] = width;
    }

    /**
     * Get width
     *
     * @return {number|null} Width of something
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
});