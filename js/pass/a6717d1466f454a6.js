var proto = {};
Object.defineProperty(proto, "length", {
  get: function () {
    return 2;
  },
  configurable: true
});
var Con = function () {};
Con.prototype = proto;
var childOne = new Con();
childOne[1] = true;
var childTwo = new Con();
childTwo[2] = true;