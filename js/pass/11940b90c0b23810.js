var f1 = function () {
  "use strict";
  function f() {
    gNonStrict();
  }
  f();
};
function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}