var obj = {};
var setFunc = function () {};
Object.defineProperty(obj, "prop", {
  set: setFunc
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");