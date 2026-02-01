var o = {
  set foo(stuff) {
    gNonStrict();
  }
};
function gNonStrict() {
  return gNonStrict.caller;
}