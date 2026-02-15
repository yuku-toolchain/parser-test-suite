function callbackfn(val, idx, obj) {
  srcArr[2] = -1;
  srcArr[4] = -1;
  if (val > 0) return true; else return false;
}
var srcArr = [1, 2, 3, 4, 5];
var resArr = srcArr.filter(callbackfn);