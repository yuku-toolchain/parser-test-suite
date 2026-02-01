var obj = {};
var proto = {
  get: function () {
    return "inheritedDataProperty";
  }
};
var Con = function () {};
Con.prototype = proto;
var descObj = new Con();
Object.defineProperty(descObj, "get", {
  get: function () {
    return function () {
      return "ownAccessorProperty";
    };
  }
});
Object.defineProperties(obj, {
  property: descObj
});