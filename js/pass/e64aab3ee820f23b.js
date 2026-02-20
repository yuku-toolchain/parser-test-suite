function f1() {
  "use strict";
  (function () {
    gNonStrict();
  })();
}
function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}