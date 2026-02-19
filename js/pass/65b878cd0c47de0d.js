var obj = {};
var obj1 = {
  length: 10
};
Object.defineProperty(obj, "foo", {
  value: obj1,
  writable: false,
  configurable: false
});
var obj2 = {
  length: 20
};
try {
  Object.defineProperties(obj, {
    foo: {
      value: obj2
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}