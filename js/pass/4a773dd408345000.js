var objBoolean = new Boolean();
function callbackfn(val, idx, obj) {
  return this === objBoolean;
}
var testResult = [11].map(callbackfn, objBoolean);