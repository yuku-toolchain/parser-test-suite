function callbackfn() {
  return arguments[2][arguments[1]] === arguments[0];
}
var newArr = [11].filter(callbackfn);