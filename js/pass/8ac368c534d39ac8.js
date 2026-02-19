var obj = {};
var setFunc = function () {
  return 2010;
};
Object.defineProperty(obj, "prop", {
  set: setFunc
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");