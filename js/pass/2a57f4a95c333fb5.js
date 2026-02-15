var obj = {};
var descObj = new RegExp();
descObj.get = function () {
  return "RegExp";
};
Object.defineProperties(obj, {
  property: descObj
});