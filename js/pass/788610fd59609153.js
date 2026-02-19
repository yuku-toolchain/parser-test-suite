var callCount = 0;
var C = class {
  static async method() {
    callCount++;
  }
};
C.method().then(() => {}, $DONE).then($DONE, $DONE);