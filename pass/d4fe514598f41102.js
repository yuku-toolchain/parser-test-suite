function callbackfn(val, idx, obj) {
  return 11;
}
var obj = {
  0: 11,
  1: 9,
  length: 2
};
var newArr = Array.prototype.map.call(obj, callbackfn);
var tempVal = newArr[1];
newArr[1] += 1;