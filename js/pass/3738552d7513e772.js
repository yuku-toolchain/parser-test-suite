var arrObj = [];
function getFunc() {
  return 12;
}
Object.defineProperty(arrObj, "1", {
  get: getFunc
});
try {
  Object.defineProperty(arrObj, "1", {
    get: function () {
      return 14;
    }
  });
} catch (e) {
  var desc = Object.getOwnPropertyDescriptor(arrObj, "1");
}