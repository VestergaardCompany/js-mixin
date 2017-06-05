'use strict';

import Box from './Classes/Box';
import LargeBox from './Classes/LargeBox';
import Screen from './Classes/Screen';
import LargeScreen from './Classes/LargeScreen';

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

    /**
     * Returns a new instance of a dummy class that
     * uses decorated mixins
     *
     * @return {Screen}
     */
    static makeClassWithDecoratedMixins(){
        return new Screen();
    }

    /**
     * Returns new instance of a regular class that inherits
     * from a superClass using decorated mixins
     *
     * @return {LargeScreen}
     */
    static makeSubClassThatInheritsFromDecorated(){
        return new LargeScreen();
    }
}

export default TestHelper;