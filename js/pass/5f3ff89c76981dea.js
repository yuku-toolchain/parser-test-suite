function callbackfn(val, idx, obj) {
  return true;
}
var obj = {
  0: 11,
  1: 9,
  length: 2
};
var newArr = Array.prototype.filter.call(obj, callbackfn);
var tempVal = newArr[1];
newArr[1] += 1;