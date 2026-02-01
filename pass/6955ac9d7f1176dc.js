var o = {};
Object.defineProperty(o, "foo", {
  get: function () {
    "use strict";
    gNonStrict();
  }
});
function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}