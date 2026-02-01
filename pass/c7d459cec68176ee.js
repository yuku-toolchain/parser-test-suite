function callbackfn(val, idx, obj) {
  return Infinity;
}
var newArr = [11].filter(callbackfn);