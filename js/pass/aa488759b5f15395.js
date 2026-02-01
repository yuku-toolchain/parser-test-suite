var o = new Object();
o.arr = [1, 2, 3, 4, 5];
function callbackfn(val, Idx, obj) {
  delete o.arr;
  if (val === Idx + 1) return true; else return false;
}