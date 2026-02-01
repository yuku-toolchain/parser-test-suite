var callCount = 0;
var f;
f = async (_ = (function () {})()) => {
  callCount = callCount + 1;
};
f().then(_ => {}, error => assert.sameValue(error.constructor, Test262Error)).then(() => {}, $DONE).then($DONE, $DONE);