var obj = {};
var desc = {
  value: null
};
Object.defineProperty(obj, "foo", desc);
Object.defineProperties(obj, {
  foo: {
    value: null
  }
});