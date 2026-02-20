function callbackfn(prevVal, curVal, idx, obj) {
  return 1;
}
var srcArr = [1, 2, 3, 4, 5];
srcArr.reduceRight(callbackfn);