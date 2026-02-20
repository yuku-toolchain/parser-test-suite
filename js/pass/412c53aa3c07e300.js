var obj = {};
var desc = {
  value: -0
};
Object.defineProperty(obj, "foo", desc);
try {
  Object.defineProperties(obj, {
    foo: {
      value: +0
    }
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}