var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return val === 11;
}
Object.defineProperty(Array.prototype, "0", {
  get: function () {
    return 9;
  },
  configurable: true
});