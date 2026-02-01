var callCount = 0;
class C {
  async method() {
    callCount++;
  }
}
C.prototype.method().then(() => {}, $DONE).then($DONE, $DONE);