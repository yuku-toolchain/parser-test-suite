function f() {
  return gNonStrict();
}
(function () {
  "use strict";
  f.apply();
})();
function gNonStrict() {
  return gNonStrict.caller;
}