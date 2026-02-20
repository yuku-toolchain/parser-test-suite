function callbackfn(val, idx, obj) {
  if (val % 2) return true; else return false;
}
var srcArr = [0, 1, 2, 3, 4];
var resArr = srcArr.filter(callbackfn);
var desc = Object.getOwnPropertyDescriptor(resArr, 1);