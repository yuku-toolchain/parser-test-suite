function callbackfn(prevVal, curVal, idx, obj) {
  arr.length = 2;
  return prevVal + curVal;
}
var arr = [1, 2, 3, 4, 5];