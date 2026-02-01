var proto = {};
Object.defineProperty(proto, "foo", {
  get: function () {
    return 9;
  },
  configurable: false
});
var Con = function () {};
Con.prototype = proto;
var child = new Con();
Object.defineProperty(child, "foo", {
  set: function () {},
  configurable: true
});
Object.preventExtensions(child);