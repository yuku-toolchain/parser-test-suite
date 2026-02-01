function callbackfn(val, idx, obj) {
  return obj instanceof Function;
}
var obj = function (a, b) {
  return a + b;
};
obj[0] = 11;
obj[1] = 9;
var newArr = Array.prototype.filter.call(obj, callbackfn);