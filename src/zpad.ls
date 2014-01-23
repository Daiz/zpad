zpad = (n, m) ->
  m ?= zpad.default
  c = zpad.char
  "#c" * (m - "#n".length) + n
zpad.default = 2
zpad.char = \0

module.exports = zpad