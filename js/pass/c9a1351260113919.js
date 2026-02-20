function f1() {
  "use strict";
  var f = function () {
    gNonStrict();
  };
  f();
}
function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}