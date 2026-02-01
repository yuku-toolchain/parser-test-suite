var f1 = function () {
  function f() {
    "use strict";
    gNonStrict();
  }
  return f();
};
function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}