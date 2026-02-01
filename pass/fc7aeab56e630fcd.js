var obj = {};
var proto = {};
Object.defineProperty(proto, "prop", {
  get: function () {
    return 12;
  },
  enumerable: true
});
var Con = function () {};
Con.prototype = proto;
var child = new Con();
Object.defineProperty(child, "prop", {
  get: function () {
    return {
      set: function () {}
    };
  },
  enumerable: true
});
Object.defineProperties(obj, child);