const iter = {
  get [Symbol.iterator]() {}
};
Promise.resolve = "certainly not callable";
Promise.allSettled(iter).then(() => {}, reason => {}).then($DONE, $DONE);