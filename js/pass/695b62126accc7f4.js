var toStringAccessed = false;
var valueOfAccessed = false;
var obj = {
  toString: function () {
    toStringAccessed = true;
    return {};
  },
  valueOf: function () {
    valueOfAccessed = true;
    return "abc";
  }
};