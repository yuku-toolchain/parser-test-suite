function callbackfn(val, idx, obj) {
  return obj.length === 2;
}
var func = function (a, b) {
  var newArr = Array.prototype.filter.call(arguments, callbackfn);
  return newArr.length === 2;
};