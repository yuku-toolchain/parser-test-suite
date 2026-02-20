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
    throw: function () {
      return spyValue;
    }
  };
};
var delegationComplete = false;
function* g() {
  yield* badIter;
  delegationComplete = true;
}
var iter = g();
iter.next();
iter.throw();
spyValue.done = true;
iter.throw();