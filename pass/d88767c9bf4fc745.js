var callCount = 0;
class C {
  static async method(fromLiteral = 23, fromExpr = 45, fromHole = 99) {
    callCount = callCount + 1;
  }
}
var ref = C.method;
ref(undefined, void 0).then(() => {}).then($DONE, $DONE);