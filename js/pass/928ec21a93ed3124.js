function callbackfn(val, idx, obj) {
  return val < 10;
}
var obj = {
  0: 11,
  1: 9,
  2: 12,
  length: "-4294967294"
};
var newArr = Array.prototype.map.call(obj, callbackfn);