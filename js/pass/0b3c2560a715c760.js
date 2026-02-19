function callbackfn1(val, idx, obj) {
  return val > 10;
}
function callbackfn2(val, idx, obj) {
  return val > 11;
}
var func = function (a, b) {
  arguments[2] = 9;
  return Array.prototype.every.call(arguments, callbackfn1) && !Array.prototype.every.call(arguments, callbackfn2);
};