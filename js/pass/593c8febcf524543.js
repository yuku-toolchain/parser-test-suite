var obj = {};
var desc = {
  value: true
};
Object.defineProperty(obj, "foo", desc);
Object.defineProperties(obj, {
  foo: {
    value: true
  }
});