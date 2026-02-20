let callCount = 0;
Promise.any({
  [Symbol.iterator]() {
    callCount++;
    return true;
  }
}).then(() => {}, error => {}).then($DONE, $DONE);