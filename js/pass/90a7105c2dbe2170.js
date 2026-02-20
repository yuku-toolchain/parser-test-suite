var obj = {};
var descObj = {};
Object.defineProperty(descObj, "writable", {
  get: function () {
    return false;
  }
});
Object.defineProperties(obj, {
  property: descObj
});