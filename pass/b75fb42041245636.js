var arr = [11, 12, 13];
var initVal = 6.99;
var testResult = false;
function callbackfn(prevVal, curVal, idx, obj) {
  if (idx === 2) {
    testResult = prevVal === initVal;
  }
  return curVal > 10 && obj[idx] === curVal;
}