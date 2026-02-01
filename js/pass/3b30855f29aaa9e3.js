var toStringAccessed = false;
var valueOfAccessed = false;
var obj = {
  1: true,
  length: {
    toString: function () {
      toStringAccessed = true;
      return '2';
    },
    valueOf: function () {
      valueOfAccessed = true;
      return {};
    }
  }
};