var f = function () {
  gNonStrict();
};
function gNonStrict() {
  return gNonStrict.caller;
}