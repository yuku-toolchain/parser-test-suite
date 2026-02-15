function f() {
  return gNonStrict();
}
var o = {};
(function () {
  "use strict";
  f.call(o);
})();
function gNonStrict() {
  return gNonStrict.caller;
}