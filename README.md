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
zpad(5);             // -> "05", zpad pads to 2 digits by default
zpad(5, 3);          // -> "005", you can pass a second parameter to specify the amount of digits
zpad.amount(3);      // change the default padding amount by calling zpad.amount with a number
zpad.amount();       // -> 3, returns the padding amount with no arguments
zpad(5);             // -> "005"
zpad.character('X'); // change what is used for padding by calling zpad.character with a string
zpad.character();    // -> "X", returns the padding character with no arguments
zpad(5);             // -> "XX5"
zpad(5, 3, 'Z');     // -> "ZZ5", you can also pass custom pad character as third parameter

// .amount and .character can also be chained, allowing you to define them when loading the module
var pad = require('zpad').amount(4).character('Y');
pad(5);              // -> "YYY5"
```

## Legalese

No Rights Reserved, *zpad* has been released under [CC0](http://creativecommons.org/publicdomain/zero/1.0/). Feel free to use it in any manner you want.