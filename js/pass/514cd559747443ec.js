const a = './module-code_FIXTURE.js';
const b = './module-code-other_FIXTURE.js';
function* g() {
  return import(yield);
}
async function fn() {
  let iter = g();
  iter.next();
  const ns1 = await iter.next(a).value;
  iter = g();
  iter.next();
  const ns2 = await iter.next(b).value;
}