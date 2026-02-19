let poisonedDone = {};
let error = new Test262Error();
Object.defineProperties(poisonedDone, {
  done: {
    get() {
      throw error;
    }
  },
  value: {
    get() {}
  }
});
let iterStepThrows = {
  [Symbol.iterator]() {
    return {
      next() {
        return poisonedDone;
      }
    };
  }
};
Promise.any(iterStepThrows).then(() => {}, reason => {}).then($DONE, $DONE);