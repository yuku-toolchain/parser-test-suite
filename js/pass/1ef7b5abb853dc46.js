var obj = {};
Object.defineProperty(obj, "foo", {
  value: -0
});
try {
  Object.defineProperty(obj, "foo", {
    value: +0
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}