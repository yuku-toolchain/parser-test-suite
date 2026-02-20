var stepFiveOccurs = false;
var obj = {};
Object.defineProperty(obj, "length", {
  get: function () {
    return {
      valueOf: function () {
        throw new TypeError();
      }
    };
  },
  configurable: true
});
var fromIndex = {
  valueOf: function () {
    stepFiveOccurs = true;
    return 0;
  }
};