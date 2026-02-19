var obj = {};
Object.defineProperties(obj, {
  prop: {
    configurable: true,
    enumerable: true
  }
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");