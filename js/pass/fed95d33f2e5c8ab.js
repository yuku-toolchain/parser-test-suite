function callbackfn(val, idx, obj) {
  return true;
}
var obj = {
  2: 2,
  length: 20
};
Object.defineProperty(obj, "0", {
  get: function () {
    delete Object.prototype[1];
    return 0;
  },
  configurable: true
});
Object.prototype[1] = 1;
var newArr = Array.prototype.filter.call(obj, callbackfn);