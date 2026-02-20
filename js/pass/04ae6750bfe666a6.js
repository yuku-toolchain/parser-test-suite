var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return val === 8;
}
var obj = {
  0: 11,
  non_index_property: 8,
  2: 5,
  length: 20
};
var newArr = Array.prototype.filter.call(obj, callbackfn);