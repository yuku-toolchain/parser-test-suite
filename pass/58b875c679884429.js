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
  static *#method([x]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method(iter).next();