var x = 0;
var callCount = 0;
class C {
  async method(x = y, y) {
    callCount = callCount + 1;
  }
}
C.prototype.method().then(_ => {}, error => assert.sameValue(error.constructor, ReferenceError)).then(() => {}, $DONE).then($DONE, $DONE);