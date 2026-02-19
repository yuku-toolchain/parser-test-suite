var obj = {};
function getFunc() {
  return "property";
}
Object.defineProperty(obj, "property", {
  get: getFunc,
  configurable: false
});
try {
  Object.defineProperty(obj, "property", {
    get: getFunc,
    set: function () {},
    configurable: false
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}