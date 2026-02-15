var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  if (idx <= 1) {
    accessed = true;
  }
}
var arr = [0, 1];
Object.defineProperty(arr, "2", {
  get: function () {
    throw new RangeError("unhandle exception happened in getter");
  },
  configurable: true
});