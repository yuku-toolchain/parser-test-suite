var fun = function () {
  return 10;
};
var descObj = {
  get: fun
};
Object.defineProperty(descObj, "set", {
  set: function () {}
});
var obj = {};
Object.defineProperties(obj, {
  prop: descObj
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");