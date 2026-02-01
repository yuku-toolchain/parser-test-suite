var proto = {
  get: function () {
    return "inheritedDataProperty";
  }
};
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var descObj = new ConstructFun();
Object.defineProperty(descObj, "get", {
  value: function () {
    return "ownDataProperty";
  }
});
var newObj = Object.create({}, {
  prop: descObj
});