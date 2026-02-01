var f = Function("\"use strict\";\ngNonStrict();");
function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}