var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return typeof val === "undefined";
}
Object.defineProperty(Array.prototype, "0", {
  set: function () {},
  configurable: true
});