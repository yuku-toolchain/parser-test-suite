var callCnt = 0;
function callbackfn(val, idx, obj) {
  delete arr[4];
  callCnt++;
}
Array.prototype[4] = 5;
var arr = [1, 2, 3, 4, 5];
arr.forEach(callbackfn);
delete Array.prototype[4];