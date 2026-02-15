var obj = {
  len: 2010
};
var getFunc = function () {
  return this;
};
Object.defineProperty(obj, "prop", {
  get: getFunc
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");