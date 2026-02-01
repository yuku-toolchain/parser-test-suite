var obj = {};
var proto = {};
Object.defineProperty(proto, "prop", {
  get: function () {
    return {
      value: 9
    };
  },
  enumerable: false
});
var Con = function () {};
Con.prototype = proto;
var child = new Con();
Object.defineProperty(child, "prop", {
  get: function () {
    return {
      value: 12
    };
  },
  enumerable: true
});
Object.defineProperties(obj, child);