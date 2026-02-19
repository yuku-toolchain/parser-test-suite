var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
}
var obj = {
  0: 11,
  1: 12
};
Array.prototype.forEach.call(obj, callbackfn);