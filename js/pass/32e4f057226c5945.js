function f1() {
  return (function () {
    "use strict";
    gNonStrict();
  })();
}
function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}