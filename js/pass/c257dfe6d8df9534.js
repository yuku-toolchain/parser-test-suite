var objArray = new Array(2);
function callbackfn(val, idx, obj) {
  return this === objArray;
}
var testResult = [11].map(callbackfn, objArray);