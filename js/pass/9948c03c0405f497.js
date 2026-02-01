function callbackfn(val, Idx, obj) {
  arr[1000] = 3;
  if (val < 3) return true; else return false;
}
var arr = new Array(10);
arr[1] = 1;
arr[2] = 2;