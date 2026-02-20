function callbackfn1(val, idx, obj) {
  return val > 10;
}
function callbackfn2(val, idx, obj) {
  return val > 11;
}
var toStringAccessed = false;
var obj = {
  0: 9,
  1: 11,
  2: 12,
  length: {
    toString: function () {
      toStringAccessed = true;
      return '2';
    }
  }
};