var x = 0;
var callCount = 0;
var C = class {
  async method(x = x) {
    callCount = callCount + 1;
  }
};
C.prototype.method().then(_ => {}, error => assert.sameValue(error.constructor, ReferenceError)).then(() => {}, $DONE).then($DONE, $DONE);