function testCompoundAssignment() {
  var x = 5;
  var innerX = (function () {
    x &= (eval("var x = 2;"), 3);
    return x;
  })();
  if (innerX !== 2) {}
  if (x !== 1) {}
}
testCompoundAssignment();