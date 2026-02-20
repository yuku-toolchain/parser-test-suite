var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return typeof val === "undefined";
}
var arr = [];
Object.defineProperty(arr, "0", {
  set: function () {},
  configurable: true
});