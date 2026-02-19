var obj = {};
var desc = {
  writable: false
};
Object.defineProperty(obj, "foo", desc);
Object.defineProperties(obj, {
  foo: {
    writable: false
  }
});