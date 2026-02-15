function callbackfn(val, idx, obj) {
  if (idx === 2 && val === "length") {
    return true;
  } else {
    return false;
  }
}
var arr = {};
Object.defineProperty(arr, "length", {
  get: function () {
    arr[2] = "length";
    return 3;
  },
  configurable: true
});