var obj = {};
var descObj = new Error();
descObj.get = function () {
  return "Error";
};
Object.defineProperties(obj, {
  property: descObj
});