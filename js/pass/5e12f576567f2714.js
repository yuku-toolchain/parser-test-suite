function callbackfn(val, idx, obj) {
  return val < 10;
}
var obj = {
  0: 11,
  1: 9,
  2: 12,
  length: "2E0"
};
var newArr = Array.prototype.map.call(obj, callbackfn);