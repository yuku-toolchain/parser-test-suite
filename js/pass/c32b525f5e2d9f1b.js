var called = 0;
function callbackfn(val, idx, obj) {
  called += 1;
  return val > 10;
}
var arr = [9, 12];
Object.defineProperty(arr, "1", {
  get: function () {
    arr.length = 2;
    return 8;
  },
  configurable: true
});
var testResult = arr.map(callbackfn);