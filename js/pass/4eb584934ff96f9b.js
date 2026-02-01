var obj = {};
Object.defineProperties(obj, {
  prop: {
    writable: true
  }
});
var desc = Object.getOwnPropertyDescriptor(obj, "prop");