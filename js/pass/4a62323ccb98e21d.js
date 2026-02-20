function callbackfn(prevVal, curVal, idx, obj) {
  delete o.arr;
  return prevVal + curVal;
}
var o = new Object();
o.arr = ['1', 2, 3, 4, 5];