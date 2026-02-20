var callCount = 0;
var C = class {
  static async *method() {
    callCount++;
  }
};
C.method().next().then(() => {}, $DONE).then($DONE, $DONE);