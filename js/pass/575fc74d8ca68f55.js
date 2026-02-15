function f() {
  return gNonStrict();
}
(function () {
  "use strict";
  f.apply(global);
})();
function gNonStrict() {
  return gNonStrict.caller;
}