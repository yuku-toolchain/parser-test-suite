function f() {
  return gNonStrict();
}
(function () {
  "use strict";
  f.call(undefined);
})();
function gNonStrict() {
  return gNonStrict.caller;
}