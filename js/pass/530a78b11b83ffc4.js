function f1() {
  return delete arguments.length;
}
try {
  if (!f1()) {}
} catch (e) {}
var f2 = function () {
  return delete arguments.length;
};
try {
  if (!f2()) {}
} catch (e) {}