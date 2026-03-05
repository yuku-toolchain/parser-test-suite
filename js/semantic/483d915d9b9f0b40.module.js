var outerScope = {
  x: 0
};
var innerScope = {
  get x() {
    delete this.x;
    return 2;
  }
};
with (outerScope) {
  with (innerScope) {
    x <<= 3;
  }
}
if (innerScope.x !== 16) {}
if (outerScope.x !== 0) {}