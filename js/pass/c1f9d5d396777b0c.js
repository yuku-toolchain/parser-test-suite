function callbackfn(val, idx, obj) {
  if (idx === 0) {
    return val === 11;
  }
  return false;
}
var func = function (a, b) {
  return Array.prototype.some.call(arguments, callbackfn);
};