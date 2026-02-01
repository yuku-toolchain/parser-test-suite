var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
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