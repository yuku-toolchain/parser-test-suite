function callbackfn(val, idx, obj) {
  return true;
}
var obj = {};
Object.defineProperty(obj, "length", {
  get: function () {
    obj[2] = "length";
    return 3;
  },
  configurable: true
});
var newArr = Array.prototype.filter.call(obj, callbackfn);