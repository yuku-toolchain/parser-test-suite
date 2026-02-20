var obj = {};
var desc = {
  value: NaN
};
Object.defineProperty(obj, "foo", desc);
Object.defineProperties(obj, {
  foo: {
    value: NaN
  }
});