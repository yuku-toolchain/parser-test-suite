var kValue = {};
function callbackfn(val, idx, obj) {
  return idx === 5 && val === kValue;
}
var obj = {
  5: kValue,
  length: 100
};
var newArr = Array.prototype.filter.call(obj, callbackfn);