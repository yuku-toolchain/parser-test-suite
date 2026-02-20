var str = "something different";
function f1() {
  arguments.callee = str;
  return arguments;
}
try {
  if (f1().callee !== str) {}
} catch (e) {}
var f2 = function () {
  arguments.callee = str;
  return arguments;
};
try {
  if (f2().callee !== str) {}
} catch (e) {}