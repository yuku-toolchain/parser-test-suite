function f1() {
  var f = function () {
    "use strict";
    gNonStrict();
  };
  return f();
}
function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}