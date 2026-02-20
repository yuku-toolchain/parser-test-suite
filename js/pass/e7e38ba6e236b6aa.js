var callCount = 0;
var f = async function (_ = (function () {})()) {
  callCount = callCount + 1;
};
f().then(_ => {}, error => assert.sameValue(error.constructor, Test262Error)).then(() => {}, $DONE).then($DONE, $DONE);