function callbackfn(val, idx, obj) {
  arr.length = 3;
  if (val < 4) return false; else return true;
}
var arr = [1, 2, 3, 4, 6];