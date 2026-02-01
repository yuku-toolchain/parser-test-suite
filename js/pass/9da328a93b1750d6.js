var f1 = function () {
  "use strict";
  (function () {
    gNonStrict();
  })();
};
function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}