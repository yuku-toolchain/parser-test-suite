var obj = {};
var proto = {
  value: "inheritedDataProperty"
};
var Con = function () {};
Con.prototype = proto;
var descObj = new Con();
Object.defineProperty(descObj, "value", {
  get: function () {
    return "ownAccessorProperty";
  }
});
Object.defineProperties(obj, {
  property: descObj
});