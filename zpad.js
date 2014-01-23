// main function
var zpad = function (n, m, c) {
  if (!m) m = zpad._length;
  if (!c) c = zpad._character;
  if (m < 1) m = 1;
  n = "" + n;
  m -= n.length;
  while (m-- > 0) n = c + n;
  return n;
}

// properties
zpad._length = 2;
zpad._character = '0';

// 'length' getter/setter
zpad.length = function (m) {
  if (m) {
    zpad._length = m;
    return zpad; // return main function for chaining
  } else {
    return zpad._length;
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