'use strict';

import BareMixin from './Decorators/BareMixin';
import HasInstance from './Decorators/HasInstance';
import Cached from './Decorators/Cached';

/**
 * Declare a mixin - decorates the given mixin class with
 * a "cached, has instance and bare mixin" decorators.
 *
 * @see BareMixin
 * @see HasInstance
 * @see Cached
 *
 * @param {Function} mixinClass
 *
 * @return {Function}
 */
const DeclareMixin = (mixinClass) => {
    return Cached(
        HasInstance(
            BareMixin(mixinClass)
        )
    );
};

export default DeclareMixin;