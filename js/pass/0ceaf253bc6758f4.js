function callbackfn(val, idx, obj) {
  return idx === 1 && val === 13;
}
Array.prototype[1] = 13;
var newArr = [].filter(callbackfn);