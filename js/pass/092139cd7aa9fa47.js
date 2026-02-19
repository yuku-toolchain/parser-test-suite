let effects = [];
function* g() {
  yield 'a';
  yield 'b';
  yield 'c';
}
g().forEach((value, count) => {
  effects.push(value, count);
});