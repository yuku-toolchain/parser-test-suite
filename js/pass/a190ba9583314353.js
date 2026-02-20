var getFun = function () {
  return 11;
};
var obj = {};
Object.defineProperties(obj, {
  prop: {
    get: getFun,
    set: undefined
  }
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");