let callCount = 0;
Promise.any({
  [Symbol.iterator]() {
    callCount++;
    return '';
  }
}).then(() => {}, error => {}).then($DONE, $DONE);