function callbackfn(val, idx, obj) {
  if (val % 2) return true; else return false;
}
var srcArr = [1, 2, 3, 4, 5];
var resArr = srcArr.filter(callbackfn);