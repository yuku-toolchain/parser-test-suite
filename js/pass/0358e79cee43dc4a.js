var callCnt = 0.;
function callbackfn(val, Idx, obj) {
  callCnt++;
  return true;
}
var arr = new Array(10);
arr[1] = undefined;
arr.every(callbackfn);