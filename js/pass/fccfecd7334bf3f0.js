var accessed = false;
var testResult = false;
var initialValue = 0;
function callbackfn(prevVal, curVal, idx, obj) {
  if (idx >= 1) {
    accessed = true;
    testResult = curVal >= 1;
  }
}
var obj = {
  0: 0,
  2: 2,
  length: 3
};
Object.defineProperty(obj, "1", {
  get: function () {
    throw new RangeError("unhandle exception happened in getter");
  },
  configurable: true
});