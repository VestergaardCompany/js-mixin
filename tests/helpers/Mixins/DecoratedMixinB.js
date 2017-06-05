'use strict';

import DeclareMixin from './../../../src/declare';

/**
 * height symbol
 *
 * @type {Symbol}
 * @private
 */
const _height = Symbol('height');

/**
 * Decorated Mixin B Mixin
 *
 * @return {DecoratedMixinB}
 */
export default DeclareMixin((superClass) => class DecoratedMixinB extends superClass {

    /**
     * Set height
     *
     * @param {number|null} height Height of something
     */
    set height(height) {
        this[_height] = height;
    }

    /**
     * Get height
     *
     * @return {number|null} Height of something
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
});