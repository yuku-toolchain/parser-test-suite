var proto = {
  get: function () {
    return "inheritedDataProperty";
  }
};
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var descObj = new ConstructFun();
var newObj = Object.create({}, {
  prop: descObj
});