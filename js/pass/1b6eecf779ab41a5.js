function callbackfn(val, idx, obj) {
  return new Boolean(false);
}
var newArr = [11].filter(callbackfn);