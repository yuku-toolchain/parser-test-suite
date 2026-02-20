var o = {
  set foo(stuff) {
    "use strict";
    gNonStrict();
  }
};
function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}