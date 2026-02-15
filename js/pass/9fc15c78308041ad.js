try {
  for ((function () {
    throw "NoInExpression";
  })(); ; (function () {
    throw "SecondExpression";
  })()) {
    throw "Statement";
  }
} catch (e) {
  if (e !== "NoInExpression") {}
}