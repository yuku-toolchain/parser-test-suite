function callbackfn(val, idx, obj) {
  return val < 10;
}
var obj = {
  0: 9,
  length: -Infinity
};
var newArr = Array.prototype.map.call(obj, callbackfn);