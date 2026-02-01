function callbackfn1(val, idx, obj) {
  return val > 10;
}
function callbackfn2(val, idx, obj) {
  return val > 11;
}
var proto = {
  length: 2
};
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child[0] = 12;
child[1] = 11;
child[2] = 9;