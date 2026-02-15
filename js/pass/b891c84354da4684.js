var callCnt = 0;
function callbackfn(val, idx, obj) {
  callCnt++;
}
var arr = new Array(10);
arr[1] = undefined;
arr.forEach(callbackfn);