function* g() {
  yield 1;
  yield 0;
  yield 2;
  yield 0;
  yield 3;
  yield 0;
  yield 4;
}
let iterator = g();
let predicateCalls = 0;
iterator = iterator.filter(value => {
  ++predicateCalls;
  return value !== 0;
});
let resultCount = 0;
for (let value of iterator) {
  ++resultCount;
}
let {value, done} = iterator.next();