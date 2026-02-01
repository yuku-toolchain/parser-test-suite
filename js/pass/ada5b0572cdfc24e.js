var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return true;
}
var obj = {
  0: 11,
  1: 12
};
var newArr = Array.prototype.filter.call(obj, callbackfn);