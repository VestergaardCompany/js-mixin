'use strict';

import { ORIGINAL_MIXIN } from './../Utils/wrap';
import { MIXIN_REFERENCE } from './BareMixin';

/**
 * Decorates the given mixin class to support "instance of" operation.
 *
 * The given mixin class MUST be decorated with the "BareMixin" for this
 * to work.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
 * @see BareMixin
 *
 * @param {Function} mixinClass
 * @return {Function} Decorated mixin class
 */
const HasInstance = (mixinClass) => {

    // If given mixin class already has a custom "has instance"
    // symbol, then abort - just return the mixin, since there
    // is no need to add custom behaviour to it.
    if(mixinClass.hasOwnProperty(Symbol.hasInstance)){
        return mixinClass;
    }

    // Otherwise, we add a custom Symbol.hasInstance method for
    // the mixin class.
    Object.defineProperty(mixinClass, Symbol.hasInstance, {

        value: function(instance){
            // Fetch the original mixin class
            let originalMixinClass = this[ORIGINAL_MIXIN];

            // If there is no original mixin class, then we simply
            // abort - it cannot be an instance of the given...
            if( ! originalMixinClass){
                return false;
            }

            // Loop through the given instance's prototype chain
            while(instance !== null){

                // If a reference has been stated on the mixin class and it
                // matches the original mixin, we assume that
                if(instance.hasOwnProperty(MIXIN_REFERENCE) && instance[MIXIN_REFERENCE] === originalMixinClass){
                    return true;
                }

                // Fetch the next prototype
                instance = Object.getPrototypeOf(instance);
            }

            // If nothing was matched, then we assume that the instances
            // simply do not match.
            return false;
        }

    });

    // Finally, return the decorated mixin class
    return mixinClass;
};

export default HasInstance;