var accessed = false;
var firstStepOccured = false;
var secondStepOccured = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return true;
}
var obj = {
  1: 11,
  2: 12,
  length: {
    valueOf: function () {
      firstStepOccured = true;
      return {};
    },
    toString: function () {
      secondStepOccured = true;
      return {};
    }
  }
};