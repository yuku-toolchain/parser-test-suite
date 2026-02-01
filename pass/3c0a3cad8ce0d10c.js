var proto = {};
Object.defineProperty(proto, "0", {
  get: function () {
    return 2;
  },
  configurable: true
});
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child.length = 1;
Object.defineProperty(child, "0", {
  set: function () {},
  configurable: true
});