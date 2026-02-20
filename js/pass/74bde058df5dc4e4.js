var obj = {};
var descObj = new RegExp();
descObj.value = "RegExp";
Object.defineProperties(obj, {
  property: descObj
});