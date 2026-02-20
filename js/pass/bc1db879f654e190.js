var obj = {};
var proto = {
  writable: false
};
var Con = function () {};
Con.prototype = proto;
var descObj = new Con();
Object.defineProperties(obj, {
  property: descObj
});