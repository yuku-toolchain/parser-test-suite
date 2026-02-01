var CALLER_OWN_PROPERTY_DOES_NOT_EXIST = Symbol();
function inner() {
  return inner.hasOwnProperty("caller") ? inner.caller : CALLER_OWN_PROPERTY_DOES_NOT_EXIST;
}
var callCount = 0;
var f;
f = async function* g() {
  "use strict";
  let descriptor = Object.getOwnPropertyDescriptor(inner, "caller");
  if (descriptor && descriptor.configurable && false) {
    Object.defineProperty(inner, "caller", {});
  }
  var result = inner();
  if (descriptor && descriptor.configurable && false) {}
  if (result !== CALLER_OWN_PROPERTY_DOES_NOT_EXIST) {}
  callCount++;
};
f().next().then(() => {}, $DONE).then($DONE, $DONE);