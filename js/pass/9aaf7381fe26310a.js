var callCnt = 0;
function callbackfn(val, idx, obj) {
  srcArr.length = 2;
  callCnt++;
  return 1;
}
var srcArr = [1, 2, 3, 4, 5];
var resArr = srcArr.map(callbackfn);