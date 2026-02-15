function callbackfn(val, idx, obj) {
  if (idx === 0) {
    return val !== 11;
  } else {
    return true;
  }
}
Object.defineProperty(Array.prototype, "0", {
  get: function () {
    return 11;
  },
  configurable: true
});