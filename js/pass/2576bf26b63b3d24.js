function callbackfn(val, idx, obj) {
  if (idx === 1) {
    return typeof val === "undefined";
  }
  return false;
}
var arr = [];
Object.defineProperty(arr, "1", {
  set: function () {},
  configurable: true
});
var testResult = arr.map(callbackfn);