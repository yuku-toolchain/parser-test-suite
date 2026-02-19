var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
}
var obj = {
  0: 0,
  1: 1,
  length: undefined
};
Array.prototype.forEach.call(obj, callbackfn);