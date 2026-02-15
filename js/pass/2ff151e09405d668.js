var proto = {};
Object.defineProperty(proto, "length", {
  set: function () {},
  configurable: true
});
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child[1] = true;