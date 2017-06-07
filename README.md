# Js Mixin

An adaptation of [Justin Fagnani's](http://justinfagnani.com/author/justinfagnani/) [mixwith.js](https://github.com/justinfagnani/mixwith.js) package.
 
Please make sure to read the original author's great article on ["Real" Mixins with JavaScript Classes](http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/), before attempting to use the components offered in this package.

## Content

  * [Content](#content)
  * [Motivation](#motivation)
    + [Core Differences](#core-differences)
  * [How to use](#how-to-use)
    + [Declaring a mixin](#declaring-a-mixin)
    + [Using a mixin](#using-a-mixin)
      - [Using multiple mixins](#using-multiple-mixins)
  * [Further Documentation](#further-documentation)
  * [License](#license)

## Motivation

At the time of writing this, the original author's [mixwith.js](https://github.com/justinfagnani/mixwith.js) package appeared to be no longer maintained. Like many other developers, I too was relying on the `mixwith` package.
However, I did encounter a small defect, which was blocking me from completing some work. An issue was submitted (https://github.com/justinfagnani/mixwith.js/issues/27), yet unfortunately the author remained silent. I assume that Justin simply did not have time to look at it and other opened issues.
 
With this mind, please note that this package is by no means an attempt to discredit the original author and that he should be acknowledged for his great work.
This package is merely an adaptation of the original source.

It is my hopes that Justin will someday return to the `mixwith` package. If or when that becomes relavant, then this package will be subject to change, in that the core components will be changed to act as [wrappers](https://en.wikipedia.org/wiki/Adapter_pattern) for the original implementation - or at least as much as possible.

### Core Differences

The core differences between the original source and this adaptation, is that the package's overall structure has been split into smaller components, each in their own file. Furthermore, all components are exported as JavaScript es6, without any bundling (e.g. no babel / webpack dist exports!). 

The functionality of declaring mixins and how to use them remains the same. This is illustrated in the following sections.

## How to use

### Declaring a mixin

You can declare a mixin via the `DeclareMixin` method. It will ensure that you can perform `instance of` checks, if such is required.

```javascript

import { DeclareMixin } from '@vestergaard-company/js-mixin';

export default DeclareMixin((superClass) => class WidthAware extends superClass {

    set width(width) {
        // Not shown...
    }

    get width() {
        // Not shown...
    }
});
```

### Using a mixin

To apply your custom mixin, use the `mix` method, just like the original `mixwith.js` source.

```javascript

import WidthAware from './MyMixins/WidthAware';
import mix from '@vestergaard-company/js-mixin';

class Box extends mix(class {}).width(
    WidthAware
){
    // Your class implementation...
}

export default Box;
```

#### Using multiple mixins

You can of course also apply multiple mixins, using the same method. 

```javascript

import WidthAware from './MyMixins/WidthAware';
import HeightAware from './MyMixins/HeightAware';
import PriceAware from './MyMixins/PriceAware';
import mix from '@vestergaard-company/js-mixin';

class Box extends mix(class {}).width(
    WidthAware,
    HeightAware,
    PriceAware
){
    // Your class implementation...
}

export default Box;
```

## Further Documentation

As mentioned earlier, please review the ["Real" Mixins with JavaScript Classes](http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/) article and the  [original source](https://github.com/justinfagnani/mixwith.js). They contain a detailed explanations on how all of this works and why. 

## License

This package has been released under [GPL-3.0](https://spdx.org/licenses/GPL-3.0.html). Note: the original source is licenced under [Apache-2.0](https://spdx.org/licenses/Apache-2.0.html), copyrighted by [Justin Fagnani](http://justinfagnani.com/author/justinfagnani/).