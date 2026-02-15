var objFunction = function () {};
function callbackfn(val, idx, obj) {
  return this === objFunction;
}
var testResult = [11].map(callbackfn, objFunction);