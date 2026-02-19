var obj = {};
var descObj = new Date(0);
descObj.value = "Date";
Object.defineProperties(obj, {
  property: descObj
});