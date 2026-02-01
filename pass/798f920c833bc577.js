var obj = {};
var desc = {
  value: 101
};
Object.defineProperty(obj, "foo", desc);
Object.defineProperties(obj, {
  foo: {
    value: 101
  }
});