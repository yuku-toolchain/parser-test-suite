var f1 = function () {
  var f = function () {
    gNonStrict();
  };
  f();
};
function gNonStrict() {
  return gNonStrict.caller;
}