function testCompoundAssignment() {
  var x = 1;
  var innerX = (function () {
    x <<= (eval("var x = 2;"), 3);
    return x;
  })();
  if (innerX !== 2) {}
  if (x !== 8) {}
}
testCompoundAssignment();