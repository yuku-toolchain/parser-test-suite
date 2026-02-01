var arrObj = [];
function getFunc() {
  return 12;
}
Object.defineProperty(arrObj, "1", {
  get: getFunc,
  set: undefined
});
try {
  Object.defineProperty(arrObj, "1", {
    set: function () {}
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}