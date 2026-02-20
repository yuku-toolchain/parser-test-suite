var callCount = 0;
function* ref(fromLiteral = 23, fromExpr = 45, fromHole = 99) {
  callCount = callCount + 1;
}
ref(undefined, void 0).next();