function* values() {
  yield 3;
  yield 7;
}
var outerIterable, expectedOuter, i, innerIterable, expectedInner, j;
outerIterable = values();
expectedOuter = 3;
i = 0;
for (var x of outerIterable) {
  expectedOuter = 7;
  i++;
  innerIterable = values();
  expectedInner = 3;
  j = 0;
  for (var y of innerIterable) {
    expectedInner = 7;
    j++;
  }
}