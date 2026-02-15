function callbackfn(val, idx, obj) {
  return val;
}
var obj = {
  0: 11,
  1: 9,
  length: 2
};
var newArr = Array.prototype.map.call(obj, callbackfn);