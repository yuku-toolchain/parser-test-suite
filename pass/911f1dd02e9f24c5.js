var obj = {};
var descObj = new Number(-9);
descObj.writable = false;
Object.defineProperties(obj, {
  property: descObj
});