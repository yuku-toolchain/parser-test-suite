function callbackfn(val, idx, obj) {
  if (idx === 0) {
    return val !== 11;
  } else {
    return true;
  }
}
var obj = {
  10: 10,
  length: 20
};
Object.defineProperty(obj, "0", {
  get: function () {
    return 11;
  },
  configurable: true
});