function testCompoundAssignment() {
  var x = 1;
  var innerX = (function () {
    x |= (eval("var x = 2;"), 4);
    return x;
  })();
  if (innerX !== 2) {}
  if (x !== 5) {}
}
testCompoundAssignment();