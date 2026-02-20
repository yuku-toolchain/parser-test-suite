var callCount = 0;
var obj = {
  async method(_ = (function () {})()) {
    callCount = callCount + 1;
  }
};
obj.method().then(_ => {}, error => assert.sameValue(error.constructor, Test262Error)).then(() => {}, $DONE).then($DONE, $DONE);