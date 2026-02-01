var toStringAccessed = false;
var valueOfAccessed = false;
var obj = {
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