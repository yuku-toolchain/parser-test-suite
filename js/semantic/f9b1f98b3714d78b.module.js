var outerScope = {
  x: 0
};
var innerScope = {
  get x() {
    delete this.x;
    return 5;
  }
};
with (outerScope) {
  with (innerScope) {
    x &= 3;
  }
}
if (innerScope.x !== 1) {}
if (outerScope.x !== 0) {}