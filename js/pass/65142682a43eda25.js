function callbackfn(val, idx, obj) {
  return val > 10;
}
var obj = {
  0: 10,
  1: 12,
  2: 9,
  length: 2
};
var newArr = Array.prototype.map.call(obj, callbackfn);