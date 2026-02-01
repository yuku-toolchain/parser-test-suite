var __in__NotInExpression__, __in__NotInExpression__2, __in__for;
try {
  for ((function () {
    __in__NotInExpression__ = "checked";
    __in__NotInExpression__2 = "passed";
  })(); (function () {
    throw "FirstExpression";
  })(); (function () {
    throw "SecondExpression";
  })()) {
    __in__for = "reached";
  }
} catch (e) {
  if (e !== "FirstExpression") {}
}
if (__in__NotInExpression__ !== "checked" & __in__NotInExpression__2 !== "passed") {}
if (typeof __in__for !== "undefined") {}