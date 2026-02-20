function f() {
  return gNonStrict();
}
(function () {
  "use strict";
  f.bind()();
})();
function gNonStrict() {
  return gNonStrict.caller;
}