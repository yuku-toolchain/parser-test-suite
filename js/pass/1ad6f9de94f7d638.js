function f() {
  return gNonStrict();
}
var o = {};
(function () {
  "use strict";
  f.bind(o)();
})();
function gNonStrict() {
  return gNonStrict.caller;
}