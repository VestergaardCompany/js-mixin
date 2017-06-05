'use strict';

import Box from './Classes/Box';
import LargeBox from './Classes/LargeBox';

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
        return new Box();
    }

    /**
     * Returns a new instance that extends a class using
     * mixin-classes
     *
     * @see makeClassWithRegularMixins()
     *
     * @return {LargeBox}
     */
    static makeRegularSubClass(){
        return new LargeBox();
    }
}

export default TestHelper;