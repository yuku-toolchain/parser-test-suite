function testAssignment() {
  var x = 0;
  var scope = {};
  with (scope) {
    x = (scope.x = 2, 1);
  }
  if (scope.x !== 2) {}
  if (x !== 1) {}
}
testAssignment();