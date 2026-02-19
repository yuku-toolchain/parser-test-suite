var obj = {};
var descObj = new Number(-9);
descObj.get = function () {
  return "Number";
};
Object.defineProperties(obj, {
  property: descObj
});