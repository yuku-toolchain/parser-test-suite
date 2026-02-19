var obj = {};
var desc = {
  writable: false,
  configurable: true
};
Object.defineProperty(obj, "foo", desc);
Object.defineProperties(obj, {
  foo: {
    writable: true,
    configurable: true
  }
});