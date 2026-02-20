var fun = function () {
  return 10;
};
var proto = {};
Object.defineProperty(proto, "set", {
  get: function () {
    return function () {
      return arguments;
    };
  }
});
var Con = function () {};
Con.prototype = proto;
var descObj = new Con();
Object.defineProperty(descObj, "set", {
  set: function () {}
});
descObj.get = fun;
var obj = {};
Object.defineProperties(obj, {
  prop: descObj
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");