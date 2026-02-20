var callCount = 0;
var C = class {
  static async method(_ = (function () {})()) {
    callCount = callCount + 1;
  }
};
C.method().then(_ => {}, error => assert.sameValue(error.constructor, Test262Error)).then(() => {}, $DONE).then($DONE, $DONE);