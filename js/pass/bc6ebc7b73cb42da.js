var callCount = 0;
var obj = {
  async method(a = eval("var a = 42")) {
    callCount = callCount + 1;
  }
};
obj.method().then(_ => {}, error => assert.sameValue(error.constructor, SyntaxError)).then(() => {}, $DONE).then($DONE, $DONE);