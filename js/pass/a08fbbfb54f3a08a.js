var proto = {};
Object.defineProperty(proto, "prop", {
  get: function () {
    return 11;
  },
  configurable: true
});
var Con = function () {};
Con.prototype = proto;
var obj = new Con();
Object.defineProperty(obj, "prop", {
  value: 12,
  configurable: false
});