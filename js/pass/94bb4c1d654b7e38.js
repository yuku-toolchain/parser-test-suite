var accessed = false;
function callbackfn(val, idx, obj) {
  if (idx > 0) {
    accessed = true;
  }
  return true;
}
var arr = [];
arr[10] = 100;
Object.defineProperty(arr, "0", {
  get: function () {
    throw new RangeError("unhandle exception happened in getter");
  },
  configurable: true
});