function callbackfn(val, idx, obj) {
  return true;
}
var obj = {
  0: 11,
  1: 9,
  length: true
};
var newArr = Array.prototype.filter.call(obj, callbackfn);