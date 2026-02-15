var CALLER_OWN_PROPERTY_DOES_NOT_EXIST = Symbol();
function inner() {
  return inner.hasOwnProperty("caller") ? inner.caller : CALLER_OWN_PROPERTY_DOES_NOT_EXIST;
}
var callCount = 0;
var f;
f = async function f() {
  "use strict";
  let descriptor = Object.getOwnPropertyDescriptor(inner, "caller");
  if (descriptor && descriptor.configurable && true) {
    Object.defineProperty(inner, "caller", {
      get() {
        return 1;
      }
    });
  }
  var result = inner();
  if (descriptor && descriptor.configurable && true) {}
  if (result !== CALLER_OWN_PROPERTY_DOES_NOT_EXIST) {}
  callCount++;
};
f().then(() => {}, $DONE).then($DONE, $DONE);