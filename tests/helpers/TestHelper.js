'use strict';

import RegularMixinA from './Mixins/RegularMixinA';
import RegularMixinB from './Mixins/RegularMixinB';
import mix from './../../src/mix';

/**
 * Test Helper
 *
 * @author Alin Eugen Deac <ade@vestergaardcompany.com>
 */
class TestHelper {

    /**
     * Returns a new dummy class instance, using
     * regular defined mixin classes.
     *
     * @return {Box}
     */
    static makeClassWithRegularMixins(){
        // A class using regular mixin
        class Box extends mix(class{}).with(
            RegularMixinA,
            RegularMixinB
        ){
            constructor(){
                super();
                console.log('Box');
            }
        }

        return new Box();
    }
}

export default TestHelper;