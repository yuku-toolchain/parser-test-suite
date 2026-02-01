var accessed = false;
function callbackfn(val, idx, obj) {
  if (idx > 1) {
    accessed = true;
  }
  return true;
}
var arr = [];
arr[5] = 10;
arr[10] = 100;
Object.defineProperty(arr, "1", {
  get: function () {
    throw new RangeError("unhandle exception happened in getter");
  },
  configurable: true
});