var called = 0;
function callbackfn(val, idx, obj) {
  called++;
  if (idx < 2) {
    return val > 10;
  } else if (idx === 2) {
    return val < 10;
  } else {
    return false;
  }
}
var func = function (a, b) {
  return Array.prototype.every.call(arguments, callbackfn);
};