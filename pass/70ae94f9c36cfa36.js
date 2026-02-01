function f() {
  return gNonStrict();
}
(function () {
  "use strict";
  f.bind(undefined)();
})();
function gNonStrict() {
  return gNonStrict.caller;
}