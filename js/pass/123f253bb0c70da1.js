function callbackfn(val, idx, obj) {
  arr[4] = 6;
  if (val < 6) return false; else return true;
}
var arr = [1, 2, 3, 4, 5];