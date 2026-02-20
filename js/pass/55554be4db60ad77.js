var obj = {
  "1": 1
};
var toStringAccessed = false;
var valueOfAccessed = false;
var ownProp = {
  toString: function () {
    toStringAccessed = true;
    return [1];
  },
  valueOf: function () {
    valueOfAccessed = true;
    return [1];
  }
};