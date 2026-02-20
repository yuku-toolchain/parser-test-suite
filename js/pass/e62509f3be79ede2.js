function callbackfn(val, idx, obj) {
  return true;
}
var arr = [1, 2, 3, 4, 5];
arr.every(callbackfn);