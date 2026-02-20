function callbackfn(val, idx, obj) {
  return val < 10;
}
var obj = {
  0: 11,
  1: 9,
  length: 2.685
};
var newArr = Array.prototype.map.call(obj, callbackfn);