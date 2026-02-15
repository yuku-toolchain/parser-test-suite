var callCount = 0;
var C = class {
  async *method() {
    callCount++;
  }
};
C.prototype.method().next().then(() => {}, $DONE).then($DONE, $DONE);