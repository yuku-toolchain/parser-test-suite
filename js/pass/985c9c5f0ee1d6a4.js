function testAssignment() {
  var x = 0;
  var innerX = (function () {
    x = (eval("var x;"), 1);
    return x;
  })();
  if (innerX !== undefined) {}
  if (x !== 1) {}
}
testAssignment();