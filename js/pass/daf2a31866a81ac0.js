var toStringAccessed = false;
var valueOfAccessed = false;
var fromIndex = {
  toString: function () {
    toStringAccessed = true;
    return '1';
  },
  valueOf: function () {
    valueOfAccessed = true;
    return {};
  }
};