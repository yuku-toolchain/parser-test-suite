var toStringAccessed = false;
var valueOfAccessed = false;
var obj = {
  toString: function () {
    toStringAccessed = true;
    return "abc";
  },
  valueOf: function () {
    valueOfAccessed = true;
    return "cef";
  }
};