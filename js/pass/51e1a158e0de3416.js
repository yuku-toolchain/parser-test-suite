var callCount = 0;
var obj = {
  async *method(fromLiteral = 23, fromExpr = 45, fromHole = 99) {
    callCount = callCount + 1;
  }
};
var ref = obj.method;
ref(undefined, void 0).next().then(() => {}).then($DONE, $DONE);