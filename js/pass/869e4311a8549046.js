var callbackfnAccessed = false;
var toStringAccessed = false;
var valueOfAccessed = false;
function callbackfn(val, idx, obj) {
  callbackfnAccessed = true;
  return val > 10;
}
var obj = {
  0: 11,
  1: 12,
  length: {
    valueOf: function () {
      valueOfAccessed = true;
      return {};
    },
    toString: function () {
      toStringAccessed = true;
      return {};
    }
  }
};