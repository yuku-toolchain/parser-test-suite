var f1 = function () {
  function f() {
    gNonStrict();
  }
  f();
};
function gNonStrict() {
  return gNonStrict.caller;
}