var obj = {};
var descObj = new Boolean(false);
descObj.writable = false;
Object.defineProperties(obj, {
  property: descObj
});