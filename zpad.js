var zpad = function(n, m, c) {
  if (!m) m = zpad.default$;
  if (!c) c = zpad.padWith$;
  if (m < 1) m = 1;
  n = "" + n;
  while(n.length < m) n = c + n;
  return n;
}
zpad.default$ = 2;
zpad.padWith$ = '0';
zpad.default = function(a) {
  if(a) {
    zpad.default$ = a;
    return zpad;
  } else {
    return zpad.default$;
  }
}
zpad.padWith = function(c) {
  if(c) {
    zpad.padWith$ = c;
    return zpad;
  } else {
    return zpad.padWith$;
  }
}

module.exports = zpad;