'use strict';

import { ORIGINAL_MIXIN } from './../Utils/wrap';
import wrap from './../Utils/wrap';

/**
 * Reference to a mixin
 *
 * @type {Symbol}
 */
export const MIXIN_REFERENCE = Symbol('mixinRef');

/**
 * Decorator that stores a reference to the mixin class, which
 * ultimately can be used for "instance of" checks.
 *
 * @see wrap
 *
 * @param {Function} mixinClass
 *
 * @return {Function} Decorated mixin
 */
const BareMixin = (mixinClass) => wrap(mixinClass, (superclass) => {
    // Apply the mixin class
    let app = mixinClass(superclass);

    // Add reference to the wrapped mixin class, so that we can enable
    // a "instance of" support.
    app.prototype[MIXIN_REFERENCE] = mixinClass[ORIGINAL_MIXIN];

    return app;
});

export default BareMixin;