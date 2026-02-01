function f1() {
  return arguments.hasOwnProperty("callee");
}
try {
  if (f1() !== true) {}
} catch (e) {}
var f2 = function () {
  return arguments.hasOwnProperty("callee");
};
try {
  if (f2() !== true) {}
} catch (e) {}