var obj = {};
var ownProp = {
  valueOf: function () {
    return "abc";
  },
  toString: undefined
};
Object.defineProperty(obj, ownProp, {});