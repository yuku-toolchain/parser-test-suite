var arg;
function callbackfn(val, idx, obj) {
  return this === arg;
}
arg = (function () {
  return arguments;
})(1, 2, 3);
var testResult = [11].map(callbackfn, arg);