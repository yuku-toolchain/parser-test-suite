function callbackfn(val, idx, obj) {
  if (val % 2) return 2 * val + 1; else return val / 2;
}
var srcArr = [0, 1, 2, 3, 4];
var resArr = srcArr.map(callbackfn);
var desc = Object.getOwnPropertyDescriptor(resArr, 1);