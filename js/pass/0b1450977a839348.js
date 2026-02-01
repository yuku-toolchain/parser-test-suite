function callbackfn(val, idx, obj) {
  if (idx === 2) {
    return val !== 12;
  } else {
    return true;
  }
}
var arr = [];
Object.defineProperty(arr, "2", {
  get: function () {
    return 12;
  },
  configurable: true
});