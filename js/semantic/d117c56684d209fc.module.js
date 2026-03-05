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
    ++x;
  }
}
if (innerScope.x !== 3) {}
if (outerScope.x !== 0) {}