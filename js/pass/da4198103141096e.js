var proto = {};
proto.foo = 0;
var Con = function () {};
Con.prototype = proto;
var child = new Con();
Object.defineProperty(child, "foo", {
  get: function () {
    return 10;
  },
  configurable: true
});
Object.freeze(child);