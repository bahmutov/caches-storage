# caches-storage
> It is just like localStorage - but built on top of Cache API

[![NPM][caches-storage-icon] ][caches-storage-url]

[![Build status][caches-storage-ci-image] ][caches-storage-ci-url]
[![semantic-release][semantic-image] ][semantic-url]

Async storage built on top of [Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache),
but looks just like promise-returning `localStorage`

## Install and use

`npm install --save caches-storage`

```js
var cachesStorage = require('caches-storage')
var optionalName = 'my-app'
cachesStorage(optionalName)
    .setItem('foo', { name: 'Joe' })
    .then(function () {
        return cachesStorage.getItem('foo')
    })
    .then(function (result) {
        console.log(result);
        // { name: 'Joe' }
    })
```

The value is JSON serialized.

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/caches-storage/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[caches-storage-icon]: https://nodei.co/npm/caches-storage.png?downloads=true
[caches-storage-url]: https://npmjs.org/package/caches-storage
[caches-storage-ci-image]: https://travis-ci.org/bahmutov/caches-storage.png?branch=master
[caches-storage-ci-url]: https://travis-ci.org/bahmutov/caches-storage
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
