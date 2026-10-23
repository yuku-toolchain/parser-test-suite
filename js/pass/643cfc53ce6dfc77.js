globalThis.count = 0;
const realm1 = new ShadowRealm();
const r1wrapped = realm1.evaluate(`
  globalThis.count = 0;
  () => globalThis.count += 1;
`);
const realm2Evaluate = realm1.evaluate(`
  const realm2 = new ShadowRealm();
(str) => realm2.evaluate(str);
`);
const r2wrapper = realm2Evaluate(`
  globalThis.wrapped = undefined;
  globalThis.count = 0;
  (fn) => globalThis.wrapped = fn;
`);
const rewrapped = r2wrapper(r1wrapped);
const r2wrapped = realm2Evaluate('globalThis.wrapped');