var callCount = 0;
async function f(a = eval("var a = 42")) {
  callCount = callCount + 1;
}
f().then(_ => {}, error => assert.sameValue(error.constructor, SyntaxError)).then(() => {}, $DONE).then($DONE, $DONE);