var accessed2 = false;
function callbackfn2(val, idx, obj) {
  accessed2 = true;
}
var obj2 = {
  0: 9,
  length: "-Infinity"
};
Array.prototype.forEach.call(obj2, callbackfn2);