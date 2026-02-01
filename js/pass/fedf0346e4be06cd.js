var obj = {};
var ownProp = {
  toString: function () {
    return "abc";
  }
};
Object.defineProperty(obj, ownProp, {});