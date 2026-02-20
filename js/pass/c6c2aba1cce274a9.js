function callbackfn(val, idx, obj) {
  if (idx === 2 && val === "length") {
    return false;
  } else {
    return true;
  }
}
var obj = {};
Object.defineProperty(obj, "length", {
  get: function () {
    obj[2] = "length";
    return 3;
  },
  configurable: true
});
var testResult = Array.prototype.map.call(obj, callbackfn);