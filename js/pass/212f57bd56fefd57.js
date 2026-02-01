function callbackfn(val, idx, obj) {
  delete srcArr[4];
  if (val > 0) return 1; else return 0;
}
var srcArr = [1, 2, 3, 4, 5];
var resArr = srcArr.map(callbackfn);