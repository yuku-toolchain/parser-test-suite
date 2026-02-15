function callbackfn1(val, idx, obj) {
  return val > 10;
}
function callbackfn2(val, idx, obj) {
  return val > 11;
}
var valueOfAccessed = false;
var obj = {
  0: 12,
  1: 11,
  2: 9,
  length: {
    valueOf: function () {
      valueOfAccessed = true;
      return 2;
    }
  }
};