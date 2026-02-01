var called = 0;
function callbackfn(val, idx, obj) {
  called++;
  return val === 11;
}
var func = function (a, b) {
  return Array.prototype.every.call(arguments, callbackfn);
};