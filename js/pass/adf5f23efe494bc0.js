function callbackfn(val, idx, obj) {
  if (idx === 1 && val === 1) {
    return false;
  } else {
    return true;
  }
}
var arr = [0, 2];
Object.defineProperty(arr, "0", {
  get: function () {
    Object.defineProperty(arr, "1", {
      get: function () {
        return 1;
      },
      configurable: true
    });
    return 0;
  },
  configurable: true
});
var testResult = arr.map(callbackfn);