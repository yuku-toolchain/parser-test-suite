var obj = {};
var globalVariable = 20;
var getFunc = function () {
  globalVariable = 2010;
  return globalVariable;
};
Object.defineProperty(obj, "prop", {
  get: getFunc
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");