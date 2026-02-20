var obj = {};
var descObj = new Error();
descObj.writable = false;
Object.defineProperties(obj, {
  property: descObj
});