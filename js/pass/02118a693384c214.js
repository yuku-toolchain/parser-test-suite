var proto = {
  configurable: true
};
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var descObj = new ConstructFun();
var newObj = Object.create({}, {
  prop: descObj
});
var result1 = newObj.hasOwnProperty("prop");
delete newObj.prop;
var result2 = newObj.hasOwnProperty("prop");