function callbackfn(val, idx, obj) {
  return new Array(10);
}
var newArr = [11].filter(callbackfn);