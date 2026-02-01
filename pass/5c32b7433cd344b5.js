var toStringAccessed = false;
var valueOfAccessed = false;
var fromIndex = {
  toString: function () {
    toStringAccessed = true;
    return {};
  },
  valueOf: function () {
    valueOfAccessed = true;
    return {};
  }
};