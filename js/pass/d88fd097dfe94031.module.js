var f = new Function("return gNonStrict();");
function gNonStrict() {
  return gNonStrict.caller;
}