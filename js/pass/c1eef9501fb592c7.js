var f1 = function () {
  "use strict";
  var f = function () {
    gNonStrict();
  };
  f();
};
function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}