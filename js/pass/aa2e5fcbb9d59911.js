function f1() {
  return arguments.hasOwnProperty("length");
}
try {
  if (f1() !== true) {}
} catch (e) {}
var f2 = function () {
  return arguments.hasOwnProperty("length");
};
try {
  if (f2() !== true) {}
} catch (e) {}