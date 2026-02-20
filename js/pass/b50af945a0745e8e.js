var badIter = {};
var callCount = 0;
var spyValue = Object.defineProperty({
  done: false
}, 'value', {
  get: function () {
    callCount += 1;
  }
});
badIter[Symbol.iterator] = function () {
  return {
    next: function () {
      return {
        done: false
      };
    },
    return: function () {
      return spyValue;
    }
  };
};
var normalCompletion = false;
var errorCompletion = false;
var delegationComplete = false;
function* g() {
  try {
    yield* badIter;
    normalCompletion = true;
  } catch (_) {
    errorCompletion = true;
  } finally {
    delegationComplete = true;
  }
}
var iter = g();
iter.next();
iter.return();
spyValue.done = true;
iter.return();