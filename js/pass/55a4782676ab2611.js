var testResult = false;
var initialValue = 0;
function callbackfn(prevVal, curVal, idx, obj) {
  if (idx === 1) {
    testResult = curVal === 1;
  }
}
var func = function (a, b, c) {
  Array.prototype.reduce.call(arguments, callbackfn, initialValue);
};
func(0, 1);