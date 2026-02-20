var obj = {};
Object.defineProperty(obj, "prop", {
  value: 2010,
  writable: false,
  enumerable: true,
  configurable: false
});
var propertyDefineCorrect = obj.hasOwnProperty("prop");
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");