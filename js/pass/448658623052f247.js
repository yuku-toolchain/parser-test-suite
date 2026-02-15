var obj = {};
Object.defineProperty(obj, "prop", {
  value: "ThisIsAString"
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");