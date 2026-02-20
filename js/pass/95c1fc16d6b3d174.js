function f1() {
  for (var x in arguments) {
    if (x === "callee") {
      return false;
    }
  }
  return true;
}
try {
  if (!f1()) {}
} catch (e) {}
var f2 = function () {
  for (var x in arguments) {
    if (x === "callee") {
      return false;
    }
  }
  return true;
};
try {
  if (!f2()) {}
} catch (e) {}