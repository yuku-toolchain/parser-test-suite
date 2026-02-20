var testResult = false;
function callbackfn(prevVal, curVal, idx, obj) {
  if (idx === 1) {
    testResult = curVal === 1;
  }
}
var func = function (a, b, c) {
  Array.prototype.reduceRight.call(arguments, callbackfn, "initialValue");
};
func(0, 1);