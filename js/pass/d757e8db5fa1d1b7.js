function testCompoundAssignment() {
  var x = 8;
  var innerX = (function () {
    x >>>= (eval("var x = 2;"), 1);
    return x;
  })();
  if (innerX !== 2) {}
  if (x !== 4) {}
}
testCompoundAssignment();