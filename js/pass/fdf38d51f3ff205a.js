var a;
function foo() {
  eval("a = 10");
  return () => a;
}