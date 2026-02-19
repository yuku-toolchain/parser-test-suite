function callbackfn(val, idx, obj) {
  return "non-empty string";
}
var newArr = [11].filter(callbackfn);