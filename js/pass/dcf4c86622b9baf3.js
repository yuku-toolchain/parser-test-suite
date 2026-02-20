var arrObj = [];
var obj1 = {
  length: 10
};
Object.defineProperty(arrObj, 0, {
  value: obj1,
  writable: false,
  configurable: false
});
var obj2 = {
  length: 20
};
try {
  Object.defineProperty(arrObj, "0", {
    value: obj2
  });
} catch (e) {
  if (!(e instanceof TypeError)) {}
}