var called = 0;
function callbackfn(preVal, val, idx, obj) {
  called++;
}
var arr = [0, 1, 2, 3];
Object.defineProperty(arr, "4", {
  get: function () {
    arr.length = 2;
  },
  configurable: true
});
arr.reduceRight(callbackfn, "initialValue");