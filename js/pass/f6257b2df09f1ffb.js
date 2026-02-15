var obj = {};
var descObj = new Error();
descObj.value = "Error";
Object.defineProperties(obj, {
  property: descObj
});