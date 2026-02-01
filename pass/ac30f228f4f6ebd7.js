var testResult = false;
function callbackfn(prevVal, curVal, idx, obj) {
  if (idx === 1) {
    testResult = prevVal === 2;
  }
}
var arr = [0, 1, 2];
arr.reduceRight(callbackfn);