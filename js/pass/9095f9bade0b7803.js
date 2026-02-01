var stepFiveOccurs = false;
var obj = {};
Object.defineProperty(obj, "length", {
  get: function () {
    throw new RangeError();
  },
  configurable: true
});
var fromIndex = {
  valueOf: function () {
    stepFiveOccurs = true;
    return 0;
  }
};