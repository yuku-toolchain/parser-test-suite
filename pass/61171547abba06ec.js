try {
  for (; ; (function () {
    throw "SecondExpression";
  })()) {
    var __in__for = "reached";
  }
} catch (e) {
  if (e !== "SecondExpression") {}
}
if (__in__for !== "reached") {}