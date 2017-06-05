'use strict';

/**
 * Mixin Builder
 *
 * Allows you to extend a class with one or more mixin classes.
 *
 * This builder is heavily inspired by Justin Fagnani's Mixwith.js
 *
 * @see http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/
 * @see https://github.com/justinfagnani/mixwith.js
 *
 * @author Alin Eugen Deac <ade@vestergaardcompany.com>
 */
class Builder {

    /**
     * Create a new Builder instance
     *
     * @param {function} [superClass=class {}]
     */
    constructor(superClass){
        this.superClass = superClass || class {};
    }

    /**
     * Mixin one or more mixin-classes
     *
     * @param {...function} mixins
     *
     * @return {*}
     */
    with(...mixins){
        return mixins.reduce((c, m) => {

            if(typeof m !== 'function'){
                return c;
            }

            return m(c);
        }, this.superClass);
    }
}

export default Builder;