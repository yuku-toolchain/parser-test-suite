function f() {
  "use strict";
  gNonStrict();
}
var o = {};
function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}