var preIterVisible = false;
var obj = {
  length: 2
};
function callbackfn(val, idx, obj) {
  if (idx === 0) {
    return val === 11;
  } else if (idx === 1) {
    return val === 9;
  } else {
    return false;
  }
}
Object.defineProperty(obj, "0", {
  get: function () {
    preIterVisible = true;
    return 11;
  },
  configurable: true
});
Object.defineProperty(obj, "1", {
  get: function () {
    if (preIterVisible) {
      return 9;
    } else {
      return 11;
    }
  },
  configurable: true
});
var testResult = Array.prototype.map.call(obj, callbackfn);