var proto = {
  value: "inheritedDataProperty"
};
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var descObj = new ConstructFun();
Object.defineProperty(descObj, "value", {
  get: function () {
    return "ownAccessorProperty";
  }
});
var newObj = Object.create({}, {
  prop: descObj
});