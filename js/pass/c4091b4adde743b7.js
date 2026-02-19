function f() {
  return gNonStrict();
}
(function () {
  "use strict";
  f.call(null);
})();
function gNonStrict() {
  return gNonStrict.caller;
}