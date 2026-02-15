var objString = new String();
function callbackfn(val, idx, obj) {
  return this === objString;
}
var testResult = [11].map(callbackfn, objString);