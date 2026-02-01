var obj = {};
var toStringAccessed = false;
var valueOfAccessed = false;
var ownProp = {
  toString: function () {
    toStringAccessed = true;
    return "abc";
  },
  valueOf: function () {
    valueOfAccessed = true;
    return "prop";
  }
};
Object.defineProperty(obj, ownProp, {});