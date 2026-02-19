var storeProtoLength;
function callbackfn(prevVal, curVal, idx, obj) {
  return obj.length === 2;
}
storeProtoLength = Array.prototype.length;
Array.prototype.length = 0;