var toStringAccessed = false;
var valueOfAccessed = false;
var proto = {
  valueOf: function () {
    valueOfAccessed = true;
    return 1;
  }
};
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child.toString = function () {
  toStringAccessed = true;
  return 2;
};