function callbackfn(val, idx, obj) {
  return idx === 1 && typeof val === "undefined";
}
var arr = [0, 2];
Object.defineProperty(arr, "0", {
  get: function () {
    delete Array.prototype[1];
    return 0;
  },
  configurable: true
});
Array.prototype[1] = 1;
var testResult = arr.map(callbackfn);