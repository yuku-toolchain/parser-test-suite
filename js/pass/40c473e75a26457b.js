var obj = {};
var getter = function () {
  return "inheritedDataProperty";
};
var proto = {
  get: getter
};
var Con = function () {};
Con.prototype = proto;
var descObj = new Con();
Object.defineProperties(obj, {
  property: descObj
});