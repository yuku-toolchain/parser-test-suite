function callbackfn(val, idx, obj) {
  arr[1000] = 5;
  if (val < 5) return false; else return true;
}
var arr = new Array(10);
arr[1] = 1;
arr[2] = 2;