function f() {
  "use strict";
  gNonStrict();
}
function foo() {
  return f();
}
function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}