var obj = {
  0: 11,
  length: 2
};
function callbackfn(val, idx, o) {
  return obj === o;
}
var newArr = Array.prototype.filter.call(obj, callbackfn);