function callbackfn(val, idx, obj) {
  return val > 10;
}
var arrProtoLen;
arrProtoLen = Array.prototype.length;
Array.prototype.length = 0;
var testResult = [12, 11].map(callbackfn);