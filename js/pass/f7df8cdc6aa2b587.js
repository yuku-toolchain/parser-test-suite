var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return typeof obj.length === "undefined";
}
Object.defineProperty(Object.prototype, "length", {
  get: function () {
    return 2;
  },
  configurable: true
});
var obj = {
  0: 12,
  1: 13
};
Object.defineProperty(obj, "length", {
  set: function () {},
  configurable: true
});