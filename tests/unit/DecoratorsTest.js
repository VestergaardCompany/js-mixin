'use strict';

import TestHelper from './../helpers/TestHelper';
import DecoratedMixinA from './../helpers/Mixins/DecoratedMixinA';
import DecoratedMixinB from './../helpers/Mixins/DecoratedMixinB';
import faker from 'faker';

describe('Decorators Test', function(){

    it('can create instance with decorated mixin', function () {
        let screen = TestHelper.makeClassWithDecoratedMixins();

        let width = faker.random.number;
        let height = faker.random.number;

        screen.width = width;
        screen.height = height;

        expect(screen.width).toBe(width, 'Incorrect width - mixin does not work!');
        expect(screen.height).toBe(height, 'Incorrect height - mixin does not work!');
    });

    it('can create instance that extends class with decorated mixin', function () {
        let screen = TestHelper.makeSubClassThatInheritsFromDecorated();

        let width = faker.random.number;
        let height = faker.random.number;

        screen.width = width;
        screen.height = height;

        expect(screen.width).toBe(width, 'Incorrect width - mixin does not work!');
        expect(screen.height).toBe(height, 'Incorrect height - mixin does not work!');
    });

    it('can perform instance of check', function () {
        let screen = TestHelper.makeClassWithDecoratedMixins();

        expect(screen instanceof DecoratedMixinA).toBe(true, 'Instance of check failed for mixin A');
        expect(screen instanceof DecoratedMixinB).toBe(true, 'Instance of check failed for mixin B');
    });

    it('can perform instance of check, when class extends', function () {
        let screen = TestHelper.makeSubClassThatInheritsFromDecorated();

        expect(screen instanceof DecoratedMixinA).toBe(true, 'Instance of check failed for mixin A');
        expect(screen instanceof DecoratedMixinB).toBe(true, 'Instance of check failed for mixin B');
    });
});