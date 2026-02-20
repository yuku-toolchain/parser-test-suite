function callbackfn(val, idx, obj) {
  return val + 10;
}
var srcArr = [1, 2, 3, 4, 5];
var resArr = srcArr.map(callbackfn);