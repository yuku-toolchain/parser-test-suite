function testAssignment() {
  var x = 0;
  var innerX = (function () {
    x = (eval("var x = 2;"), 1);
    return x;
  })();
  if (innerX !== 2) {}
  if (x !== 1) {}
}
testAssignment();