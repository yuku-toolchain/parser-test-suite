function f1() {
  function f() {
    gNonStrict();
  }
  f();
}
function gNonStrict() {
  return gNonStrict.caller;
}