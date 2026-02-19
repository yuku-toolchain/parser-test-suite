var obj = {};
var proto = {
  value: "inheritedDataProperty"
};
var Con = function () {};
Con.prototype = proto;
var descObj = new Con();
Object.defineProperties(obj, {
  property: descObj
});