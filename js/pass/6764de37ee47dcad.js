function f() {
  return gNonStrict();
}
(function () {
  "use strict";
  f.call(global);
})();
function gNonStrict() {
  return gNonStrict.caller;
}