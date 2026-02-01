var x = 0;
var callCount = 0;
var f = async function (x = y, y) {
  callCount = callCount + 1;
};
f().then(_ => {}, error => assert.sameValue(error.constructor, ReferenceError)).then(() => {}, $DONE).then($DONE, $DONE);