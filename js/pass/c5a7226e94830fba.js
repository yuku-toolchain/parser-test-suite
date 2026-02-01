function callbackfn(val, idx, obj) {
  return arguments;
}
var newArr = [11].filter(callbackfn);