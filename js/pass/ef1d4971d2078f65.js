var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return true;
}
var obj = {
  0: 9,
  length: "asdf!_"
};
var newArr = Array.prototype.filter.call(obj, callbackfn);