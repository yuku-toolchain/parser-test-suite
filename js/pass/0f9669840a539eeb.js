var obj = {};
var descObj = new RegExp();
descObj.writable = false;
Object.defineProperties(obj, {
  property: descObj
});