var f1 = function () {
  return (function () {
    "use strict";
    gNonStrict();
  })();
};
function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}