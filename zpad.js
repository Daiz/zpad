var zpad = function(n, m, c) {
  if (!m) m = zpad.default;
  if (!c) c = zpad.padWith;
  if (m < 1) m = 1;
  n = "" + n;
  while(n.length < m) n = c + n;
  return n;
}
zpad.default = 2;
zpad.padWith = '0';

module.exports = zpad;