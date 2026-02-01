var obj = {};
var desc = {
  value: "abcd"
};
Object.defineProperty(obj, "foo", desc);
Object.defineProperties(obj, {
  foo: {
    value: "abcd"
  }
});