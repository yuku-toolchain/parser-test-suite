function f1() {
  return arguments.callee;
}
try {
  if (f1 !== f1()) {}
} catch (e) {}
var f2 = function () {
  return arguments.callee;
};
try {
  if (f2 !== f2()) {}
} catch (e) {}