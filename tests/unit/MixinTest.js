'use strict';

import TestHelper from './../helpers/TestHelper';
import faker from 'faker';

describe('Mixin', function(){

    it('can create instance with regular defined mixin', function () {
        let box = TestHelper.makeClassWithRegularMixins();

        let width = faker.random.number;
        let height = faker.random.number;

        box.width = width;
        box.height = height;

        expect(box.width).toBe(width, 'Incorrect width - mixin does not work!');
        expect(box.height).toBe(height, 'Incorrect height - mixin does not work!');
    });

    it('can create instance that extends class with mixin', function () {
        let box = TestHelper.makeRegularSubClass();

        let width = faker.random.number;
        let height = faker.random.number;

        box.width = width;
        box.height = height;

        expect(box.width).toBe(width, 'Incorrect width - mixin does not work!');
        expect(box.height).toBe(height, 'Incorrect height - mixin does not work!');
    });

    // it('Is instance of check', function () {
    //     let box = new LargeBox();
    //
    //     expect(box instanceof ConfigAware).toBe(true, 'Is not instance of Config Aware?!');
    //     expect(box instanceof IoCAware).toBe(true, 'Is not instance of Config Aware?!');
    // });
});