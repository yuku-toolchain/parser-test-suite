const iter = {
  get [Symbol.iterator]() {}
};
Promise.resolve = "certainly not callable";
Promise.any(iter).then(() => {}, reason => {}).then($DONE, $DONE);