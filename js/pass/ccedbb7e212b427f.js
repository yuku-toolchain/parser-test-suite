function callbackfn(prevVal, curVal, idx, obj) {
  delete arr[3];
  delete arr[4];
  return prevVal + curVal;
}
var arr = ['1', 2, 3, 4, 5];