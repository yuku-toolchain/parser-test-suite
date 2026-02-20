var f = new Function("\"use strict\";\ngNonStrict();");
function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}