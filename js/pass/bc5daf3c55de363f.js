var proto = {};
Object.defineProperty(proto, "prop", {
  value: 11,
  configurable: true
});
var Con = function () {};
Con.prototype = proto;
var obj = new Con();
Object.defineProperty(obj, "prop", {
  get: function () {
    return 12;
  },
  configurable: false
});