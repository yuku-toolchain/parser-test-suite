var obj = {};
var descObj = new Boolean(false);
descObj.get = function () {
  return "Boolean";
};
Object.defineProperties(obj, {
  property: descObj
});