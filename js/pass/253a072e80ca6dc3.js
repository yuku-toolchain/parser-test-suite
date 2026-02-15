var obj = {};
Object.defineProperty(obj, Symbol.match, {
  get: function () {}
});
var regexp = /./;
Object.defineProperty(regexp, Symbol.match, {
  get: function () {}
});