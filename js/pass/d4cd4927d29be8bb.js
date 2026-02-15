var proto = {
  length: 0
};
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child[1] = eval;
Object.defineProperty(child, "length", {
  get: function () {
    return 2;
  },
  configurable: true
});