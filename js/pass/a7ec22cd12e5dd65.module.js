var f1 = function () {
  (function () {
    gNonStrict();
  })();
};
function gNonStrict() {
  return gNonStrict.caller;
}