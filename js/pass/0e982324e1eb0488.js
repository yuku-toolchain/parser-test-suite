var obj = {};
var getFunc = function () {
  return 1001;
};
Object.defineProperty(obj, "prop", {
  get: getFunc,
  set: undefined,
  enumerable: false,
  configurable: true
});
var propertyDefineCorrect = obj.hasOwnProperty("prop");
var desc = Object.getOwnPropertyDescriptor(obj, "prop");
for (var p in obj) {}