# zpad - Zero padding for Node.js

*zpad* is a tiny Node.js module for zero padding strings and numbers, because I got tired of copypasting a function for this in every other thing I've been writing.

## Installation

*zpad* is available via npm:

```bash
$ npm install zpad
```

## Usage

```javascript
var zpad = require('zpad');
zpad(5)             // -> "05", zpad pads to 2 digits by default
zpad(5, 3)          // -> "005", you can pass a second parameter to specify the amount of digits
zpad.default = 3;   // you can also change the default by changing zpad.default
zpad(5)             // -> "005"
zpad.padWith = 'X'; // you can also change the character used for padding
zpad(5)             // -> "XX5"
zpad(5, 3, 'Z');    // -> "ZZ5", you can also pass custom pad character as third parameter
```

## Legalese

No Rights Reserved, *zpad* has been released under [CC0](http://creativecommons.org/publicdomain/zero/1.0/). As such, feel free to use it in any manner you want.