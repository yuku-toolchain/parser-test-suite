var ThrowTypeError = Object.getOwnPropertyDescriptor((function () {
  "use strict";
  return arguments;
})(), "callee").get;
function strictFn() {
  "use strict";
  return arguments;
}
var unmappedCalleeDesc = Object.getOwnPropertyDescriptor(strictFn(), "callee");