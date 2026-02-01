var proto = {};
Object.defineProperty(proto, "prop", {
  set: function () {},
  configurable: false
});
var Con = function () {};
Con.prototype = proto;
var obj = new Con();
Object.defineProperties(obj, {
  prop: {
    get: function () {
      return 12;
    },
    configurable: true
  }
});