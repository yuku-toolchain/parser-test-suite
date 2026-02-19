var o = {};
Object.defineProperty(o, "foo", {
  set: function (stuff) {
    gNonStrict();
  }
});
function gNonStrict() {
  return gNonStrict.caller;
}