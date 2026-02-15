var testResult = false;
function callbackfn(prevVal, curVal) {
  if (prevVal === 100) {
    testResult = true;
  }
  return curVal > 10;
}