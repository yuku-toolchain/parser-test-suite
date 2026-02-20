try {
  __func = __func;
} catch (e) {}
try {
  if (function __func() {
    throw "FunctionExpression";
  }) (function () {
    throw "TrueBranch";
  })(); else (function () {
    "MissBranch";
  })();
} catch (e) {
  if (e !== "TrueBranch") {}
}
try {
  __func = __func;
} catch (e) {}