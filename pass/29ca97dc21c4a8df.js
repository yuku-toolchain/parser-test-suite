var callCnt = 0;
function callbackfn(prevVal, curVal, idx, obj) {
  callCnt++;
  return curVal;
}
var arr = new Array(10);
arr[0] = arr[1] = undefined;