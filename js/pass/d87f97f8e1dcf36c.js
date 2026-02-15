var data1 = "data";
var data2 = "data";
var proto = {};
Object.defineProperty(proto, "set", {
  get: function () {
    return function (value) {
      data1 = value;
    };
  }
});
var Con = function () {};
Con.prototype = proto;
var child = new Con();
Object.defineProperty(child, "set", {
  get: function () {
    return function (value) {
      data2 = value;
    };
  }
});
var obj = {};
Object.defineProperties(obj, {
  prop: child
});
obj.prop = "overrideData";