var callCount = 0;
var C = class {
  async method() {
    callCount++;
  }
};
C.prototype.method().then(() => {}, $DONE).then($DONE, $DONE);