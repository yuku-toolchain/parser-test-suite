function f1() {
  var f = function () {
    gNonStrict();
  };
  f();
}
function gNonStrict() {
  return gNonStrict.caller;
}