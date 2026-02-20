var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
}
Object.defineProperty(Object.prototype, "length", {
  get: function () {
    return 2;
  },
  configurable: true
});
var obj = {
  0: 12,
  1: 11
};
Object.defineProperty(obj, "length", {
  set: function () {},
  configurable: true
});