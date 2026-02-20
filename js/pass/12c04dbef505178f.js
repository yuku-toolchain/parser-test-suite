var callCnt = 0;
function callbackfn(val, idx, obj) {
  callCnt++;
  return true;
}
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr["i"] = 10;
arr[true] = 11;