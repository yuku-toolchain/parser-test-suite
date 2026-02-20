var accessed = false;
var obj = {
  length: 2
};
function callbackfn(val, idx, o) {
  accessed = true;
  return true;
}
Object.defineProperty(obj, "1", {
  get: function () {
    return 6.99;
  },
  configurable: true
});
Object.defineProperty(obj, "0", {
  get: function () {
    delete obj[1];
    return 0;
  },
  configurable: true
});
var newArr = Array.prototype.filter.call(obj, callbackfn);