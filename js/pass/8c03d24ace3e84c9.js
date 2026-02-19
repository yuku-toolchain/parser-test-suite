var propertyFound = false;
var obj = {};
Object.defineProperty(obj, "prop", {
  get: undefined,
  set: undefined,
  enumerable: true,
  configurable: false
});
var propertyDefineCorrect = obj.hasOwnProperty("prop");
var desc = Object.getOwnPropertyDescriptor(obj, "prop");
for (var p in obj) {
  if (p === "prop") {
    propertyFound = true;
    break;
  }
}