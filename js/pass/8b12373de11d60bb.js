var callCnt = 0;
function callbackfn(val, idx, obj) {
  arr.length = 3;
  callCnt++;
}
var arr = [1, 2, 3, 4, 5];
arr.forEach(callbackfn);