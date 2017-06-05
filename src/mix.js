'use strict';

import Builder from './Builder';

/**
 * Mixin Builder wrapper
 *
 * Allows you to extend a class with one or more mixin-classes.
 *
 * @see Builder
 *
 * @param {function} [superClass=class {}]
 */
const mix = (superClass) => new Builder(superClass);

export default mix;