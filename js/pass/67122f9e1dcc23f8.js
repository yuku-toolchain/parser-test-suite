let callCount = 0;
Promise.any({
  [Symbol.iterator]() {
    callCount++;
    return undefined;
  }
}).then(() => {}, error => {}).then($DONE, $DONE);