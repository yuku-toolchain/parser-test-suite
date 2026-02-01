var proto = {
  get: function () {
    return "inheritedDataProperty";
  }
};
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var descObj = new ConstructFun();
Object.defineProperty(descObj, "get", {
  get: function () {
    return function () {
      return "ownAccessorProperty";
    };
  }
});
var newObj = Object.create({}, {
  prop: descObj
});