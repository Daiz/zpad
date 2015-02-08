// main function
var _=require('lodash');

var zpad = function (n, m, c) {
  if (!m) m = zpad._amount;
  if (!c) c = zpad._character;
  n = "" + n;
  var currentDigits = Math.floor(Math.log(n)/Math.log(10))+1,
    neededDigits = m,
    remainingDigits = Math.max(0,neededDigits - currentDigits);
  return _.repeat(c,remainingDigits)+n;
}

// properties
zpad._amount = 2;
zpad._character = '0';

// 'amount' getter/setter
zpad.amount = function (m) {
  if (m) {
    zpad._amount = m;
    return zpad; // return main function for chaining
  } else {
    return zpad._amount;
  }
}

// 'character' getter/setter
zpad.character = function (c) {
  if (c) {
    zpad._character = c;
    return zpad; // return main function for chaining
  } else {
    return zpad._character;
  }
}

module.exports = zpad;
