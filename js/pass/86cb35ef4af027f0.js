var callCount = 0;
class C {
  static async *method() {
    callCount++;
  }
}
C.method().next().then(() => {}, $DONE).then($DONE, $DONE);