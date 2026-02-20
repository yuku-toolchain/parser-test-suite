function f() {
  gNonStrict();
}
function gNonStrict() {
  return gNonStrict.caller;
}