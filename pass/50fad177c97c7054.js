function f() {
  return gNonStrict();
}
(function () {
  "use strict";
  return eval("f();");
})();
function gNonStrict() {
  return gNonStrict.caller;
}