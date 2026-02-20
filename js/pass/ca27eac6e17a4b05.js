var called = 0;
function callbackfn(val, idx, obj) {
  called++;
  if (idx === 0) {
    return val === 11;
  } else if (idx === 1) {
    return val === 9;
  } else {
    return false;
  }
}
var func = function (a, b) {
  return Array.prototype.every.call(arguments, callbackfn);
};