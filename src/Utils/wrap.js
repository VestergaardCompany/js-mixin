'use strict';

/**
 * Reference to an original mixin
 *
 * @type {Symbol}
 */
export const ORIGINAL_MIXIN = Symbol('originalMixin');

/**
 * Sets the prototype of the wrapper to be the given mixin class
 * and stores a reference to the original mixin.
 *
 * @param {Function} mixinClass
 * @param {Function} wrapper
 *
 * @return {Function} Wrapper
 */
const wrap = (mixinClass, wrapper) => {
  Object.setPrototypeOf(wrapper, mixinClass);

  if( ! mixinClass[ORIGINAL_MIXIN]){
        mixinClass[ORIGINAL_MIXIN] = mixinClass;
  }

  return wrapper;
};

export default wrap;