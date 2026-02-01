var f1 = function () {
  var f = function () {
    "use strict";
    gNonStrict();
  };
  return f();
};
function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}