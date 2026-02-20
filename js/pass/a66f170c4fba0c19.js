var callCnt = 0;
function callbackfn(prevVal, curVal, idx, obj) {
  callCnt++;
  return 2;
}
var arr = [1];