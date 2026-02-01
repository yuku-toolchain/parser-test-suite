var data = "data";
var setFun = function (value) {
  data = value;
};
var proto = {};
Object.defineProperty(proto, "set", {
  get: function () {
    return setFun;
  }
});
var Con = function () {};
Con.prototype = proto;
var child = new Con();
var obj = {};
Object.defineProperties(obj, {
  prop: child
});
obj.prop = "overrideData";