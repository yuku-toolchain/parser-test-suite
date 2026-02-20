var f = Function("return gNonStrict();");
function gNonStrict() {
  return gNonStrict.caller;
}