var callCnt = 0;
function callbackfn(val, idx, obj) {
  callCnt++;
  return 1;
}
var srcArr = new Array(10);
srcArr[1] = undefined;
var resArr = srcArr.map(callbackfn);