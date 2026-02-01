var doneCallCount = 0;
var iter = {};
iter[Symbol.iterator] = function () {
  return {
    next: function () {
      return {
        value: null,
        done: true
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
f = async function* ([x]) {
  callCount = callCount + 1;
};
f(iter).next().then(() => {}).then($DONE, $DONE);