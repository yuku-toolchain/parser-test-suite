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
var C = class {
  async *#method([x] = iter) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method().next().then(() => {}).then($DONE, $DONE);