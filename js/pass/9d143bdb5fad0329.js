let callCount = 0;
Promise.any({
  [Symbol.iterator]() {
    callCount++;
    return null;
  }
}).then(() => {}, error => {}).then($DONE, $DONE);