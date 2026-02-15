function callbackfn(val, idx, obj) {
  return idx === 0 && val === 11;
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
var newArr = Array.prototype.filter.call(obj, callbackfn);