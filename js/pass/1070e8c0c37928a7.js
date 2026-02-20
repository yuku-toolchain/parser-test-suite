var obj = {};
var toStringAccessed = false;
var valueOfAccessed = false;
var ownProp = {
  toString: function () {
    toStringAccessed = true;
    return {};
  },
  valueOf: function () {
    valueOfAccessed = true;
    return "abc";
  }
};
Object.defineProperty(obj, ownProp, {});