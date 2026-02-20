var accessed = false;
var arrProtoLen;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return obj.length === 2;
}
arrProtoLen = Array.prototype.length;
Array.prototype.length = 0;