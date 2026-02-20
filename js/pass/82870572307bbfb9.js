var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
}
var obj = {
  0: 9,
  length: -Infinity
};
Array.prototype.forEach.call(obj, callbackfn);