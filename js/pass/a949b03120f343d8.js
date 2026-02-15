var gNonStrict = gNonStrictBindee.bind(null);
function f() {
  "use strict";
  gNonStrict();
}
function gNonStrictBindee() {
  return gNonStrictBindee.caller || gNonStrictBindee.caller.throwTypeError;
}