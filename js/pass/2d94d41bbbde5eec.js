var o = {};
Object.defineProperty(o, "foo", {
  set: function (stuff) {
    "use strict";
    gNonStrict();
  }
});
function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}