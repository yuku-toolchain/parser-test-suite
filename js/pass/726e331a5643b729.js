var ThrowTypeError = Object.getOwnPropertyDescriptor((function () {
  "use strict";
  return arguments;
})(), "callee").get;
function nonSimple(a = 0) {
  return arguments;
}
var unmappedCalleeDesc = Object.getOwnPropertyDescriptor(nonSimple(), "callee");