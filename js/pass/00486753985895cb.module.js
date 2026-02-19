function f1() {
  (function () {
    gNonStrict();
  })();
}
function gNonStrict() {
  return gNonStrict.caller;
}