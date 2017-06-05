'use strict';

import DecoratedMixinA from './../Mixins/DecoratedMixinA';
import DecoratedMixinB from './../Mixins/DecoratedMixinB';
import mix from './../../../src/mix';

/**
 * Screen - Dummy class for tests
 *
 * @author Alin Eugen Deac <ade@vestergaardcompany.com>
 */
class Screen extends mix(class {}).with(
    DecoratedMixinA,
    DecoratedMixinB
){

}

export default Screen;