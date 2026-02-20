function callbackfn(val, idx, obj) {
  return function () {};
}
var newArr = [11].filter(callbackfn);