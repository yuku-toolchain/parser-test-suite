var proto = {};
Object.defineProperty(proto, "length", {
  get: function () {
    return 2;
  },
  configurable: true
});
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child[1] = 1;
child[2] = 2;