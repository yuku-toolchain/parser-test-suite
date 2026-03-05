function testFunction() {
  var x = 0;
  var scope = {
    x: 1
  };
  with (scope) {
    x = (delete scope.x, 2);
  }
  if (scope.x !== 2) {}
  if (x !== 0) {}
}
testFunction();