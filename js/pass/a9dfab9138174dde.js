function callbackfn(val, idx, obj) {
  return idx === 0 && val === 12;
}
Array.prototype[0] = 11;
var newArr = [12].filter(callbackfn);