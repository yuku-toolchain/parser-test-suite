var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
}
var obj = {
  0: 11,
  length: +0
};
Array.prototype.forEach.call(obj, callbackfn);