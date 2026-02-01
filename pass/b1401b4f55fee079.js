Object.defineProperty(String.prototype, Symbol.matchAll, {
  get: function () {}
});
var matcher = ",";
const matched = ("a,b,c").matchAll(matcher);
const matchesArray = Array.from(matched);