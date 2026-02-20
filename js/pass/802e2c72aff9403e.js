var obj = {};
var proto = {};
Object.defineProperty(proto, "prop", {
  get: function () {
    return {};
  },
  enumerable: true
});
var Con = function () {};
Con.prototype = proto;
var child = new Con();
Object.defineProperties(obj, child);