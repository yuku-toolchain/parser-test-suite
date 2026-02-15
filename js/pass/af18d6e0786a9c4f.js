function callbackfn(val, idx, obj) {
  srcArr[2] = 3;
  srcArr[5] = 6;
  return 1;
}
var srcArr = [1, 2, 4, 5];
var resArr = srcArr.map(callbackfn);