var obj = {};
var descObj = {};
Object.defineProperty(descObj, "configurable", {
  get: function () {
    return true;
  }
});
Object.defineProperties(obj, {
  prop: descObj
});
var result1 = obj.hasOwnProperty("prop");
delete obj.prop;
var result2 = obj.hasOwnProperty("prop");