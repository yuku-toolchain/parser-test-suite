var arrProtoLen;
function callbackfn(val, idx, obj) {
  return obj.length === 2;
}
arrProtoLen = Array.prototype.length;
Array.prototype.length = 0;
var newArr = [12, 11].filter(callbackfn);