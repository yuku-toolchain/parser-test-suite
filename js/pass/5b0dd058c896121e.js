function callbackfn1(val, idx, obj) {
  return val > 10;
}
function callbackfn2(val, idx, obj) {
  return val > 11;
}
var valueOfAccessed = false;
var toStringAccessed = false;
var proto = {
  valueOf: function () {
    valueOfAccessed = true;
    return 2;
  }
};
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child.toString = function () {
  toStringAccessed = true;
  return '1';
};
var obj = {
  0: 9,
  1: 11,
  2: 12,
  length: child
};