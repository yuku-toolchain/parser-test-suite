var obj = {};
var descObj = new Date(0);
descObj.get = function () {
  return "Date";
};
Object.defineProperties(obj, {
  property: descObj
});