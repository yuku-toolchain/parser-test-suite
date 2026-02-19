Object.defineProperty(Boolean.prototype, Symbol.match, {
  get: function () {}
});
var separator = true;
const matched = ("atruebtruec").match(separator);