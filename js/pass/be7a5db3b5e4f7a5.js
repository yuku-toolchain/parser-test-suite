try {
  for ((function () {
    throw "NoInExpression";
  })(); (function () {
    throw "FirstExpression";
  })(); (function () {
    throw "SecondExpression";
  })()) {
    var in_for = "reached";
  }
} catch (e) {
  if (e !== "NoInExpression") {}
}
if (in_for !== undefined) {}