let callCount = 0;
let returnCount = 0;
let error = new Test262Error();
let poisoned = {
  done: false
};
Object.defineProperty(poisoned, 'value', {
  get() {
    callCount++;
    throw error;
  }
});
let iterNextValThrows = {
  [Symbol.iterator]() {
    callCount++;
    return {
      next() {
        callCount++;
        return poisoned;
      },
      return() {
        returnCount++;
        return {};
      }
    };
  }
};
Promise.any(iterNextValThrows).then(() => {}, reason => {}).then($DONE, $DONE);