const iter = {
  get [Symbol.iterator]() {}
};
Promise.resolve = "certainly not callable";
Promise.all(iter).then(() => {}, reason => {}).then($DONE, $DONE);