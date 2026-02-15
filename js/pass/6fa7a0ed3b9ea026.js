var firstStepOccured = false;
var secondStepOccured = false;
function callbackfn(val, idx, obj) {
  return true;
}
var obj = {
  1: 11,
  2: 9,
  length: {
    valueOf: function () {
      firstStepOccured = true;
      return {};
    },
    toString: function () {
      secondStepOccured = true;
      return '2';
    }
  }
};
var newArr = Array.prototype.filter.call(obj, callbackfn);