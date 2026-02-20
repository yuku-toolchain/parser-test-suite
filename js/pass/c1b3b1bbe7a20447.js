function f1() {
  return arguments;
}
try {
  var x = f1();
} catch (e) {}
var f2 = function () {
  return arguments;
};
try {
  var x = f2();
} catch (e) {}