var x = 0;
var callCount = 0;
class C {
  static async method(x = x) {
    callCount = callCount + 1;
  }
}
C.method().then(_ => {}, error => assert.sameValue(error.constructor, ReferenceError)).then(() => {}, $DONE).then($DONE, $DONE);