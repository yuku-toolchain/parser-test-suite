var arrObj = [];
var toStringAccessed = false;
var valueOfAccessed = false;
Object.defineProperty(arrObj, "length", {
  value: {
    toString: function () {
      toStringAccessed = true;
      return '2';
    },
    valueOf: function () {
      valueOfAccessed = true;
      return {};
    }
  }
});