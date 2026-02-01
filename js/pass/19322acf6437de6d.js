const realm1 = new ShadowRealm();
const realm2 = new ShadowRealm();
globalThis.count = 0;
const r1wrapped = realm1.evaluate(`
  globalThis.count = 0;
  () => globalThis.count += 1;
`);
const r2wrapper = realm2.evaluate(`
  globalThis.wrapped = undefined;
  globalThis.count = 0;
  (fn) => globalThis.wrapped = fn;
`);
const rewrapped = r2wrapper(r1wrapped);
const r2wrapped = realm2.evaluate('globalThis.wrapped');