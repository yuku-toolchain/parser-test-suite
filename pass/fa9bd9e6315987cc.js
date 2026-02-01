function callbackfn(val, idx, obj) {
  return global;
}
var newArr = [11].filter(callbackfn);