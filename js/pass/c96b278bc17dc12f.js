var obj = {
  "abc": 1
};
var ownProp = {
  toString: function () {
    return "abc";
  }
};
var desc = Object.getOwnPropertyDescriptor(obj, ownProp);