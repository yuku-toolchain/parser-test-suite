var callCount = 0;
var ref;
ref = function (fromLiteral = 23, fromExpr = 45, fromHole = 99) {
  callCount = callCount + 1;
};
ref(undefined, void 0);