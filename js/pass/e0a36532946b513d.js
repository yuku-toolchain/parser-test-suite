const r = new ShadowRealm();
let wrapped = r.evaluate(`
function fn() {}
fn;
`);
wrapped = r.evaluate(`
function fn() {}
Object.defineProperty(fn, 'name', {
  get: () => "bar",
  enumerable: false,
  configurable: true,
});
fn;
`);
for (const name of [null, undefined, 0, '1n', false, NaN, Infinity, 'Symbol()', '[]', '{}']) {
  wrapped = r.evaluate(`
function fn() {}
Object.defineProperty(fn, 'name', {
  value: ${String(name)},
  enumerable: false,
  configurable: true,
});
fn;
`);
}