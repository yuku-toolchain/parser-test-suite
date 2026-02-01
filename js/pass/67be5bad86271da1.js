var accessed = false;
var valueOfAccessed = false;
var toStringAccessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return true;
}
var obj = {
  1: 11,
  2: 12,
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