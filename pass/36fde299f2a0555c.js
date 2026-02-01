var callCount = 0;
class C {
  static async method() {
    callCount++;
  }
}
C.method().then(() => {}, $DONE).then($DONE, $DONE);