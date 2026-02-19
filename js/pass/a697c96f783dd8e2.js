var obj = {};
var dateObj = new Date(0);
Object.defineProperty(obj, "prop", {
  value: dateObj
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");