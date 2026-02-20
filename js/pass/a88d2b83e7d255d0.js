var callCount = 0;
class C {
  async *method() {
    callCount++;
  }
}
C.prototype.method().next().then(() => {}, $DONE).then($DONE, $DONE);