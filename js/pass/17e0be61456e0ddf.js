var proto = {};
Object.defineProperty(proto, "length", {
  get: function () {
    return 0;
  },
  configurable: true
});
var Con = function () {};
Con.prototype = proto;
var child = new Con();
Object.defineProperty(child, "length", {
  value: 2,
  configurable: true
});
child[1] = true;