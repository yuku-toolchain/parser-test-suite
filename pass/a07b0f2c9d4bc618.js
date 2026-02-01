var proto = {};
Object.defineProperty(proto, "prop", {
  get: function () {
    return {
      value: 9
    };
  },
  enumerable: true
});
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var child = new ConstructFun();
Object.defineProperty(child, "prop", {
  value: {
    value: 12
  },
  enumerable: true
});
var newObj = Object.create({}, child);