var obj = {};
var obj1 = {
  length: 10
};
var desc = {
  value: obj1
};
Object.defineProperty(obj, "foo", desc);
Object.defineProperties(obj, {
  foo: {
    value: obj1
  }
});