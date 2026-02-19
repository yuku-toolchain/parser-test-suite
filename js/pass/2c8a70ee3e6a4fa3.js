var obj = {};
var proto = {
  configurable: true
};
var Con = function () {};
Con.prototype = proto;
var descObj = new Con();
Object.defineProperty(descObj, "configurable", {
  value: false
});
Object.defineProperties(obj, {
  prop: descObj
});