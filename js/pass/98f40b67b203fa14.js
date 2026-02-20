function callbackfn(val, idx, obj) {
  delete srcArr[2];
  delete srcArr[4];
  if (val > 0) return true; else return false;
}
var srcArr = [1, 2, 3, 4, 5];
var resArr = srcArr.filter(callbackfn);