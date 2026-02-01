var accessed = false;
var testResult = false;
var initialValue = 0;
function callbackfn(prevVal, curVal, idx, obj) {
  if (idx >= 1) {
    accessed = true;
    testResult = curVal >= 1;
  }
}
var arr = [0, 2];
Object.defineProperty(arr, "1", {
  get: function () {
    throw new RangeError("unhandle exception happened in getter");
  },
  configurable: true
});