var toStringAccessed = false;
var valueOfAccessed = false;
var proto = {
  toString: function () {
    toStringAccessed = true;
    return "abc";
  }
};
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child.valueOf = function () {
  valueOfAccessed = true;
  return "efg";
};