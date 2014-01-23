// main function
var zpad = function(n, m, c) {
  if (!m) m = zpad.default$;
  if (!c) c = zpad.character$;
  if (m < 1) m = 1;
  n = "" + n;
  m -= n.length;
  while (m-- > 0) n = c + n;
  return n;
}

// properties
zpad.default$ = 2;
zpad.character$ = '0';

// 'default' getter/setter
zpad.default = function(a) {
  if(a) {
    zpad.default$ = a;
    return zpad; // return main function for chaining
  } else {
    return zpad.default$;
  }
}

// 'character' getter/setter
zpad.character = function(c) {
  if(c) {
    zpad.character$ = c;
    return zpad; // return main function for chaining
  } else {
    return zpad.character$;
  }
}

module.exports = zpad;