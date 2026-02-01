function callbackfn(val, idx, obj) {
  return val === undefined && idx === 1;
}
var proto = {};
Object.defineProperty(proto, "1", {
  set: function () {},
  configurable: true
});
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child.length = 2;
var newArr = Array.prototype.filter.call(child, callbackfn);