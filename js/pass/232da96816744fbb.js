var obj = {};
var numObj = new Number();
Object.defineProperty(obj, "prop", {
  value: numObj
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");