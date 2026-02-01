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
var ranCatch = false;
try {
  throw iter;
} catch ([x]) {
  ranCatch = true;
}