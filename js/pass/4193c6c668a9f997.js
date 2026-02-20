function callbackfn(val, idx, obj) {
  srcArr[2] = 3;
  srcArr[5] = 6;
  return true;
}
var srcArr = [1, 2, 4, 5];
var resArr = srcArr.filter(callbackfn);