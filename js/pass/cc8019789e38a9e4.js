var gNonStrict = Function("return gNonStrict.caller || gNonStrict.caller.throwTypeError;");
function f() {
  "use strict";
  gNonStrict();
}