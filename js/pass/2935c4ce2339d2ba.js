function callbackfn(val, idx, obj) {
  srcArr.length = 2;
  return true;
}
var srcArr = [1, 2, 3, 4, 6];
var resArr = srcArr.filter(callbackfn);