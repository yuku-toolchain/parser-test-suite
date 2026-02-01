var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  if (idx <= 1) {
    accessed = true;
  }
}
var obj = {
  0: 0,
  1: 1,
  length: 3
};
Object.defineProperty(obj, "2", {
  get: function () {
    throw new RangeError("unhandle exception happened in getter");
  },
  configurable: true
});