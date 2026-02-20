var arrObj = [];
function getFunc() {
  return 12;
}
Object.defineProperty(arrObj, "1", {
  get: getFunc
});
try {
  Object.defineProperty(arrObj, "1", {
    get: undefined
  });
} catch (e) {
  var desc = Object.getOwnPropertyDescriptor(arrObj, "1");
}