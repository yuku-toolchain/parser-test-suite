function* gen() {
  yield 1;
  yield 2;
}
var overridenArray = [4];
overridenArray[Symbol.iterator] = gen;