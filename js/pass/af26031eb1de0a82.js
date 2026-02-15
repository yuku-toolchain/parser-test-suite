function callbackfn() {
  return arguments[2][arguments[1]] === arguments[0];
}
var testResult = [11].map(callbackfn);