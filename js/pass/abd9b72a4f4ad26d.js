var obj = {};
var descObj = new Boolean(false);
descObj.value = "Boolean";
Object.defineProperties(obj, {
  property: descObj
});