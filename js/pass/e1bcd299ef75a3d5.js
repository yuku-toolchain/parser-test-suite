var objDate = new Date(0);
function callbackfn(val, idx, obj) {
  return this === objDate;
}
var testResult = [11].map(callbackfn, objDate);