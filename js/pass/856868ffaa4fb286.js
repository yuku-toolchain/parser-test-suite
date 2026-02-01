let callCount = 0;
Promise.any({
  [Symbol.iterator]() {
    callCount++;
    return Symbol();
  }
}).then(() => {}, error => {}).then($DONE, $DONE);