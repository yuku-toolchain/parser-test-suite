function callbackfn(val, idx, obj) {
  if (idx === 0) {
    return val === 5;
  } else {
    return true;
  }
}
var proto = {
  0: 5,
  1: 6
};
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child.length = 10;
Object.defineProperty(child, "0", {
  get: function () {
    return 11;
  },
  configurable: true
});