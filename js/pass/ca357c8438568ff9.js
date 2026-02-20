Object.defineProperty(Boolean.prototype, Symbol.match, {
  get: function () {}
});
var matcher = true;
const matched = ("atruebtruec").matchAll(matcher);
const matchesArray = Array.from(matched);