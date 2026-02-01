var toStringAccessed = false;
var valueOfAccessed = false;
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
  return 2;
};
var obj = {
  1: child,
  length: child
};