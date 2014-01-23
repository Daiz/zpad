// main function
var zpad = function (n, m, c) {
  if (!m) m = zpad._amount;
  if (!c) c = zpad._character;
  if (m < 1) m = 1;
  n = "" + n;
  m -= n.length;
  while (m-- > 0) n = c + n;
  return n;
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