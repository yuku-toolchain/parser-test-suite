var arrObj = [];
var obj = {
  length: 10
};
Object.defineProperty(arrObj, "1", {
  value: obj
});
try {
  Object.defineProperty(arrObj, "1", {
    value: {}
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}