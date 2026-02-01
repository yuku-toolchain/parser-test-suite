var callCount = 0;
class C {
  static method(fromLiteral = 23, fromExpr = 45, fromHole = 99) {
    callCount = callCount + 1;
  }
}
C.method(undefined, void 0);
var ref = C.method;