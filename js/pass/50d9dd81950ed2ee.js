var arrObj = [];
var getFunc = function () {
  return 11;
};
Object.defineProperty(arrObj, "0", {
  get: getFunc,
  configurable: false
});
try {
  Object.defineProperty(arrObj, "0", {
    configurable: true
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}