var kValue = "abc";
function callbackfn(val, idx, obj) {
  if (idx === 0) {
    return val === kValue;
  }
  return false;
}
Array.prototype[0] = 11;
var testResult = [kValue].map(callbackfn);