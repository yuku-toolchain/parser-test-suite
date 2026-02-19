var obj = {};
var proto = {
  writable: true
};
var Con = function () {};
Con.prototype = proto;
var descObj = new Con();
descObj.writable = false;
Object.defineProperties(obj, {
  property: descObj
});