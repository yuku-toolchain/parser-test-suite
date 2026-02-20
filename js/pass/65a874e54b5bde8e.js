function f1() {
  return delete arguments.callee;
}
try {
  if (!f1()) {}
} catch (e) {}
var f2 = function () {
  return delete arguments.callee;
};
try {
  if (!f2()) {}
} catch (e) {}