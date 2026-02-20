var proto = {};
Object.defineProperty(proto, "prop", {
  get: function () {
    return 11;
  },
  set: function () {},
  configurable: true
});
var Con = function () {};
Con.prototype = proto;
var obj = new Con();
Object.defineProperty(obj, "prop", {
  set: function () {},
  configurable: false
});