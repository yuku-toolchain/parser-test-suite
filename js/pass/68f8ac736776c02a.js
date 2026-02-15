var CALLER_OWN_PROPERTY_DOES_NOT_EXIST = Symbol();
function inner() {
  return inner.hasOwnProperty("caller") ? inner.caller : CALLER_OWN_PROPERTY_DOES_NOT_EXIST;
}
var callCount = 0;
var C = class {
  static async *method() {
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
  }
};
C.method().next().then(() => {}, $DONE).then($DONE, $DONE);