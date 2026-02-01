var str = "something different";
function f1() {
  arguments.length = str;
  return arguments;
}
try {
  if (f1().length !== str) {}
} catch (e) {}
var f2 = function () {
  arguments.length = str;
  return arguments;
};
try {
  if (f2().length !== str) {}
} catch (e) {}