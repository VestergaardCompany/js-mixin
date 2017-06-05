'use strict';

import RegularMixinA from './../Mixins/RegularMixinA';
import RegularMixinB from './../Mixins/RegularMixinB';
import mix from './../../../src/mix';

/**
 * Box - Dummy class
 *
 * @author Alin Eugen Deac <ade@vestergaardcompany.com>
 */
class Box extends mix(class {}).with(
    RegularMixinA,
    RegularMixinB
){

}

export default Box;