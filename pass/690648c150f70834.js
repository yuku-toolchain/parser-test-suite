function callbackfn(val, Idx, obj) {
  delete arr[2];
  if (val == 3) return false; else return true;
}
var arr = [1, 2, 3, 4, 5];