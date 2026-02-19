var objRegExp = new RegExp();
function callbackfn(val, idx, obj) {
  return this === objRegExp;
}
var testResult = [11].map(callbackfn, objRegExp);