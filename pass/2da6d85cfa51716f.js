let callCount = 0;
Promise.any({
  [Symbol.iterator]() {
    callCount++;
    return false;
  }
}).then(() => {}, error => {}).then($DONE, $DONE);