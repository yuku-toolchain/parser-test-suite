var obj = {};
var descObj = new Date(0);
descObj.writable = false;
Object.defineProperties(obj, {
  property: descObj
});