Object.defineProperty(String.prototype, Symbol.match, {
  get: function () {}
});
var separator = ",";
const matched = ("a,b,c").match(separator);