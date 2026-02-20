var obj = [];
Object.defineProperty(obj, "0", {
  value: 2010,
  writable: true,
  enumerable: true,
  configurable: false
});
var propertyDefineCorrect = obj.hasOwnProperty("0");
var desc1 = Object.getOwnPropertyDescriptor(obj, "0");
function getFunc() {
  return 20;
}
var desc2 = Object.getOwnPropertyDescriptor(obj, "0");