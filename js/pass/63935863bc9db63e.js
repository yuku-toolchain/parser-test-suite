var callCount = 0;
var __obj = {
  async method(fromLiteral = 23, fromExpr = 45, fromHole = 99) {
    callCount = callCount + 1;
  }
};
var ref = __obj.method;
ref(undefined, void 0).then(() => {}).then($DONE, $DONE);