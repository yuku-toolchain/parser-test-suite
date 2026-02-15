var obj = {};
var arr = [];
arr.get = function () {
  return "Array";
};
Object.defineProperties(obj, {
  property: arr
});