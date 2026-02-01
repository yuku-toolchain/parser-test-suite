var obj = {};
var proto = {
  value: "inheritedDataProperty"
};
var Con = function () {};
Con.prototype = proto;
var descObj = new Con();
descObj.value = "ownDataProperty";
Object.defineProperties(obj, {
  property: descObj
});