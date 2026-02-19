const a = './module-code_FIXTURE.js';
const b = './module-code-other_FIXTURE.js';
function* g() {
  return import(yield 42);
}
async function fn() {
  let iter = g();
  const ns1 = await iter.next(a).value;
  iter = g();
  const ns2 = await iter.next(b).value;
}