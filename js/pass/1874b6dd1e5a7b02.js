var accessed = false;
var testResult = false;
function callbackfn(prevVal, curVal, idx, obj) {
  if (idx >= 1) {
    accessed = true;
    testResult = prevVal === 0;
  }
}
var arr = [1, 2];
Object.defineProperty(arr, "0", {
  get: function () {
    throw new RangeError("unhandle exception happened in getter");
  },
  configurable: true
});