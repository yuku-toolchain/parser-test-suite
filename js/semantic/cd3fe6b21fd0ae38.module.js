var outerScope = {
  x: 0
};
var innerScope = {
  x: 1
};
with (outerScope) {
  with (innerScope) {
    x = (delete innerScope.x, 2);
  }
}
if (innerScope.x !== 2) {}
if (outerScope.x !== 0) {}