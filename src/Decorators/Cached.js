'use strict';

import wrap from './../Utils/wrap';

/**
 * Cached mixin class reference
 *
 * @type {Symbol}
 */
export const CACHED_REFERENCE = Symbol('cachedRef');

/**
 * Decorate the given mixin class with a "cached decorator".
 *
 * Method will ensure that if the given mixin has already been applied,
 * then it will be returned / applied a single time, rather than multiple
 * times.
 *
 * @param {Function} mixinClass
 *
 * @return {Function}
 */
const Cached = (mixinClass) => wrap(mixinClass, (superclass) => {
    // Obtain cached reference...
    let cachedReference = mixinClass[CACHED_REFERENCE];

    // If there is no cached reference, then we create one onto
    // the given mixin class
    if( ! cachedReference){

        // Create a new symbol in the mixin class, using the function's name
        // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name
        cachedReference = mixinClass[CACHED_REFERENCE] = Symbol(mixinClass.name);
    }

    // Check if given superclass already has a reference to the given mixin class
    // If so, then return it.
    if(superclass.hasOwnProperty(cachedReference)){
        return superclass[cachedReference];
    }

    // Decorate the given super class
    let decorated = mixinClass(superclass);

    // Cache the reference into the superclass
    superclass[cachedReference] = decorated;

    // Finally, return the decorated mixin.
    return decorated;
});

export default Cached;