var callCount = 0;
var C = class {
  *method(fromLiteral = 23, fromExpr = 45, fromHole = 99) {
    callCount = callCount + 1;
  }
};
C.prototype.method(undefined, void 0).next();
var ref = C.prototype.method;