var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return curVal > 10;
}
var proto = {};
Object.defineProperty(proto, "length", {
  set: function () {},
  configurable: true
});
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child[0] = 11;
child[1] = 12;