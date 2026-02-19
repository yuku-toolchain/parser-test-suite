function f() {
  return gNonStrict();
}
(function () {
  "use strict";
  Function("return f();")();
})();
function gNonStrict() {
  return gNonStrict.caller;
}