var obj = [1, 3, 5];
Object.defineProperty(obj, 5, {
  value: 7,
  enumerable: false,
  configurable: true
});
Object.defineProperty(obj, 10000, {
  value: "ElementWithLargeIndex",
  enumerable: true,
  configurable: true
});
var arr = Object.keys(obj);
var index;
var initValue = 0;
for (index = 0; index < 3; index++) {
  initValue += 2;
}