var obj = {};
var tempObj = {
  testproperty: 100
};
Object.defineProperty(obj, "prop", {
  value: tempObj
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");