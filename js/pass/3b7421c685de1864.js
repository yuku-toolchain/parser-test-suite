var toStringAccessed = false;
var valueOfAccessed = false;
var targetObj = this;
var obj = {
  1: targetObj,
  length: {
    toString: function () {
      toStringAccessed = true;
      return '3';
    },
    valueOf: function () {
      valueOfAccessed = true;
      return {};
    }
  }
};