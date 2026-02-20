Object.defineProperty(Number.prototype, Symbol.matchAll, {
  get: function () {}
});
var matcher = 1;
const matched = ("a1b1c").matchAll(matcher);
const matchesArray = Array.from(matched);