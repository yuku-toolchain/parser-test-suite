var obj = {};
Object.defineProperty(obj, "prop", {
  value: 2010,
  writable: true,
  enumerable: false,
  configurable: true
});
var propertyDefineCorrect = obj.prop === 2010;
obj.prop = 1001;