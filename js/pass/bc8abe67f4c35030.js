const iter = {
  get [Symbol.iterator]() {}
};
Promise.resolve = "certainly not callable";
Promise.race(iter).then(() => {}, reason => {}).then($DONE, $DONE);