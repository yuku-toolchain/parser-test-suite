function f() {
  return gNonStrict();
}
(function () {
  "use strict";
  f.bind(null)();
})();
function gNonStrict() {
  return gNonStrict.caller;
}