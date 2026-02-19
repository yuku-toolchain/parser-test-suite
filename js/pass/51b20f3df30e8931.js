var doneCallCount = 0;
var iter = {};
iter[Symbol.iterator] = function () {
  return {
    next: function () {
      return {
        value: null,
        done: false
      };
    },
    return: function () {
      doneCallCount += 1;
      return {};
    }
  };
};
var callCount = 0;
var obj = {
  async *method([x] = iter) {
    callCount = callCount + 1;
  }
};
obj.method().next().then(() => {}).then($DONE, $DONE);