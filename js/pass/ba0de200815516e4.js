Object.defineProperty(BigInt.prototype, Symbol.matchAll, {
  get: function () {}
});
var matcher = 1n;
const matched = ("a1b1c").matchAll(matcher);
const matchesArray = Array.from(matched);