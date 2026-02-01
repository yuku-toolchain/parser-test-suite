var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
}
var obj = {
  0: 11,
  1: 12
};
Object.defineProperty(obj, "length", {
  set: function () {},
  configurable: true
});
Array.prototype.forEach.call(obj, callbackfn);