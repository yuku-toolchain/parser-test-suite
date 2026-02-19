var o = {
  get foo() {
    gNonStrict();
  }
};
function gNonStrict() {
  return gNonStrict.caller;
}