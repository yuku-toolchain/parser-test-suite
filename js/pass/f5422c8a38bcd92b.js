function callbackfn(val, idx, obj) {
  return true;
}
var srcArr = [1, 2, 3, 4, 5];
srcArr.filter(callbackfn);