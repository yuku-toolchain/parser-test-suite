function testFunction() {
  var x = 0;
  var scope = {
    get x() {
      delete this.x;
      return 16;
    }
  };
  with (scope) {
    x >>= 3;
  }
  if (scope.x !== 2) {}
  if (x !== 0) {}
}
testFunction();