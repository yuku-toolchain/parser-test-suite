var arr = [];
var toStringAccessed = false;
var valueOfAccessed = false;
Object.defineProperties(arr, {
  length: {
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
  }
});