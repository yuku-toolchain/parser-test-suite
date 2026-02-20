const r = new ShadowRealm();
let wrapped = r.evaluate(`
function fn(foo, bar) {}
fn;
`);
wrapped = r.evaluate(`
function fn() {}
delete fn.length;
fn;
`);
wrapped = r.evaluate(`
function fn() {}
Object.defineProperty(fn, 'length', {
  get: () => Infinity,
  enumerable: false,
  configurable: true,
});
fn;
`);
wrapped = r.evaluate(`
function fn() {}
Object.defineProperty(fn, 'length', {
  get: () => -Infinity,
  enumerable: false,
  configurable: true,
});
fn;
`);
wrapped = r.evaluate(`
function fn() {}
Object.defineProperty(fn, 'length', {
  get: () => -1,
  enumerable: false,
  configurable: true,
});
fn;
`);