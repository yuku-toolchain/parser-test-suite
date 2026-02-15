var obj = {};
var globalVariable = 20;
var setFunc = function () {
  globalVariable = 2010;
};
Object.defineProperty(obj, "prop", {
  set: setFunc
});
obj.prop = 10;
var desc = Object.getOwnPropertyDescriptor(obj, "prop");