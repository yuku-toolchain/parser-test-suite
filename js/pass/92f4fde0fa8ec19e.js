function callbackfn(val, idx, obj) {
  return true;
}
var obj = {
  1: 11,
  2: 9,
  length: "2.5"
};
var newArr = Array.prototype.filter.call(obj, callbackfn);