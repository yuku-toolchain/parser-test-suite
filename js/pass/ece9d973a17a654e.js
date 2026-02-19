var x = 0;
var callCount = 0;
var C = class {
  static async method(x = y, y) {
    callCount = callCount + 1;
  }
};
C.method().then(_ => {}, error => assert.sameValue(error.constructor, ReferenceError)).then(() => {}, $DONE).then($DONE, $DONE);