Object.defineProperty(Number.prototype, Symbol.match, {
  get: function () {}
});
var separator = 1;
const matched = ("a1b1c").match(separator);