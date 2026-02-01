function testCompoundAssignment() {
  var x = 7;
  var innerX = (function () {
    x %= (eval("var x = 2;"), 4);
    return x;
  })();
  if (innerX !== 2) {}
  if (x !== 3) {}
}
testCompoundAssignment();