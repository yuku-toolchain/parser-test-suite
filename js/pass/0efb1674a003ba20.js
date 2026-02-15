function callbackfn(val, idx, obj) {
  return true;
}
var obj = {
  0: 0,
  1: 111,
  2: 2,
  length: 10
};
Object.defineProperty(obj, "0", {
  get: function () {
    delete obj[1];
    return 0;
  },
  configurable: true
});
Object.prototype[1] = 1;
var newArr = Array.prototype.filter.call(obj, callbackfn);