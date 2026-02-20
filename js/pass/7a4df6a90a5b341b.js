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
var iterCount = 0;
for (let [x] = iter; iterCount < 1; ) {
  iterCount += 1;
}