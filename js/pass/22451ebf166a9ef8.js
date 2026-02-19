var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return true;
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
var newArr = Array.prototype.filter.call(child, callbackfn);