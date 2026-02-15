let callCount = 0;
Promise.any({
  [Symbol.iterator]() {
    callCount++;
    return 1;
  }
}).then(() => {}, error => {}).then($DONE, $DONE);