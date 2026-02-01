var obj = {};
var getFunc = function (arg1) {
  return 2010;
};
Object.defineProperty(obj, "prop", {
  get: getFunc
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");