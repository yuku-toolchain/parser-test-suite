var objNumber = new Number();
function callbackfn(val, idx, obj) {
  return this === objNumber;
}
var testResult = [11].map(callbackfn, objNumber);