var obj = {
  "abc": 1
};
var valueOfAccessed = false;
var toStringAccessed = false;
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
var desc = Object.getOwnPropertyDescriptor(obj, ownProp);