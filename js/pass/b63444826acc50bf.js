var obj = {};
Object.defineProperty(obj, "prop", {
  value: 2010,
  writable: true,
  enumerable: true,
  configurable: true
});
var propertyDefineCorrect = obj.hasOwnProperty("prop");
var desc1 = Object.getOwnPropertyDescriptor(obj, "prop");
Object.defineProperty(obj, "prop", {
  writable: false
});
var desc2 = Object.getOwnPropertyDescriptor(obj, "prop");