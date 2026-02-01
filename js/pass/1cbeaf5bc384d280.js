try {
  for ((function () {
    throw "NoInExpression";
  })(); ; ) {
    throw "Statement";
  }
} catch (e) {
  if (e !== "NoInExpression") {}
}