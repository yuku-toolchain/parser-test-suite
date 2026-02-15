var toStringAccessed = false;
var valueOfAccessed = false;
var obj = {
  1: true,
  length: {
    toString: function () {
      toStringAccessed = true;
      return {};
    },
    valueOf: function () {
      valueOfAccessed = true;
      return {};
    }
  }
};