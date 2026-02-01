var accessed = false;
var toStringAccessed = false;
var valueOfAccessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
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