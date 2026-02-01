var accessed = false;
var testResult = false;
function callbackfn(prevVal, curVal, idx, obj) {
  if (idx >= 1) {
    accessed = true;
    testResult = prevVal === 0;
  }
}
var obj = {
  2: 2,
  1: 1,
  length: 3
};
Object.defineProperty(obj, "0", {
  get: function () {
    throw new RangeError("unhandle exception happened in getter");
  },
  configurable: true
});