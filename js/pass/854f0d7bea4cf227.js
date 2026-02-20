Object.defineProperty(BigInt.prototype, Symbol.match, {
  get: function () {}
});
var separator = 1n;
const matched = ("a1b1c").match(separator);