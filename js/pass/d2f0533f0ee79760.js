eval("\"use strict\";\ngNonStrict();");
function gNonStrict() {
  return gNonStrict.caller;
}