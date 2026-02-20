var proto = {};
var valueOfAccessed = false;
var toStringAccessed = false;
proto.toString = function () {
  toStringAccessed = true;
  return "test";
};
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child.valueOf = function () {
  valueOfAccessed = true;
  return "10";
};
var obj = {
  "10": "length1",
  "test": "length2"
};
var desc = Object.getOwnPropertyDescriptor(obj, child);