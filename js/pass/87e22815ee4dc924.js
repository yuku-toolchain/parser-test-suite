var arr = [];
var toStringAccessed = false;
var valueOfAccessed = false;
var proto = {
  value: {
    valueOf: function () {
      valueOfAccessed = true;
      return 2;
    }
  }
};
var Con = function () {};
Con.prototype = proto;
var child = new Con();
Object.defineProperty(child, "value", {
  value: {
    toString: function () {
      toStringAccessed = true;
      return 3;
    }
  }
});
Object.defineProperties(arr, {
  length: child
});