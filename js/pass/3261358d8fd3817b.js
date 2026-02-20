var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  if (idx <= 1) {
    accessed = true;
  }
}
var arr = [0, 2];
Object.defineProperty(arr, "1", {
  get: function () {},
  configurable: true
});