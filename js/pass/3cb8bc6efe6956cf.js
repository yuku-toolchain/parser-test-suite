function callbackfn(val, idx, obj) {
  return val > 10;
}
var func = function (a, b) {
  return Array.prototype.map.call(arguments, callbackfn);
};
var testResult = func(12, 11);