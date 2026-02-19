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
var f;
f = async function* ([x] = iter) {
  callCount = callCount + 1;
};
f().next().then(() => {}).then($DONE, $DONE);