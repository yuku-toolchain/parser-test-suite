var callCnt = 0;
function callbackfn(val, idx, obj) {
  callCnt++;
  if (idx > 5) return false; else return true;
}
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];