var callCount = 0;
class C {
  async method(_ = (function () {})()) {
    callCount = callCount + 1;
  }
}
C.prototype.method().then(_ => {}, error => assert.sameValue(error.constructor, Test262Error)).then(() => {}, $DONE).then($DONE, $DONE);