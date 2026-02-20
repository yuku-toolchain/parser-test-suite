try {
  eval("return;");
} catch (e) {
  if (e instanceof SyntaxError !== true) {}
}
function f() {
  eval("return;");
}
try {
  f();
} catch (e) {
  if (e instanceof SyntaxError !== true) {}
}