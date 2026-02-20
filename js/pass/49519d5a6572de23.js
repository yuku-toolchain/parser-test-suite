var arrProtoLen = 0;
function callbackfn1(val, idx, obj) {
  return val > 10;
}
function callbackfn2(val, idx, obj) {
  return val > 11;
}
arrProtoLen = Array.prototype.length;
Array.prototype.length = 0;
Array.prototype[2] = 9;