function callbackfn(val, idx, obj) {
  return obj.length === 2;
}
var newArr = [12, 11].filter(callbackfn);