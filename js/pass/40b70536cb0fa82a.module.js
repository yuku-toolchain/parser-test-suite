var o = {};
Object.defineProperty(o, "foo", {
  get: function () {
    gNonStrict();
  }
});
function gNonStrict() {
  return gNonStrict.caller;
}