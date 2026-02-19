var proto = {};
Object.defineProperty(proto, "writable", {
  get: function () {
    return false;
  }
});
var ConstructFun = function () {};
ConstructFun.prototype = proto;
var descObj = new ConstructFun();
Object.defineProperty(descObj, "writable", {
  value: true
});
var newObj = Object.create({}, {
  prop: descObj
});
var beforeWrite = newObj.hasOwnProperty("prop") && typeof newObj.prop === "undefined";
newObj.prop = "isWritable";
var afterWrite = newObj.prop === "isWritable";