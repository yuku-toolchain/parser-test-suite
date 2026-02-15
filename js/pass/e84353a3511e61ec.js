function f() {
  "use strict";
  gNonStrict();
}
function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}