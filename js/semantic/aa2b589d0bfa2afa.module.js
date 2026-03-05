var x = 0;
var scope = {
  get x() {
    delete this.x;
    return 2;
  }
};
with (scope) {
  x ^= 3;
}
if (scope.x !== 1) {}
if (x !== 0) {}