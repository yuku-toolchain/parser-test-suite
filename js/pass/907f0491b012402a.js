var kValue = "abc";
function callbackfn(val, idx, obj) {
  if (idx === 1) {
    return val === kValue;
  }
  return false;
}
var proto = {};
Object.defineProperty(proto, "1", {
  get: function () {
    return kValue;
  },
  configurable: true
});
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child.length = 20;