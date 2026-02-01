var callCount = 0;
var obj = {
  method(fromLiteral = 23, fromExpr = 45, fromHole = 99) {
    callCount = callCount + 1;
  }
};
obj.method(undefined, void 0);
var ref = obj.method;