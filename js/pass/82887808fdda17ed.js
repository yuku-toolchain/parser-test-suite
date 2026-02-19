var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return typeof val === "undefined";
}
var obj = {
  length: 2
};
Object.defineProperty(obj, "1", {
  set: function () {},
  configurable: true
});
Object.prototype[1] = 10;