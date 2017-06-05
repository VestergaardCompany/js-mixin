'use strict';

import Box from './Classes/Box';

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
}

export default TestHelper;