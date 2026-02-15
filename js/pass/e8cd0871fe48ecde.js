function callbackfn(prevVal, curVal, idx, obj) {
  return obj.length === 2;
}
var func = function (a, b) {
  arguments[2] = 9;
  return Array.prototype.reduce.call(arguments, callbackfn, 1);
};