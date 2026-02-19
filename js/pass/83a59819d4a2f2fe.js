function callbackfn(val, idx, obj) {
  return val === 9 && idx === 1;
}
var preIterVisible = false;
var obj = {
  length: 2
};
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
      return 13;
    }
  },
  configurable: true
});
var newArr = Array.prototype.filter.call(obj, callbackfn);