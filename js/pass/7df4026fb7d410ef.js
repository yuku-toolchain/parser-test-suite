var obj = {};
var desc = {
  value: undefined
};
Object.defineProperty(obj, "foo", desc);
Object.defineProperties(obj, {
  foo: {
    value: undefined
  }
});