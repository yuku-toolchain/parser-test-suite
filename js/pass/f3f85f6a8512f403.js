const r = new ShadowRealm();
const proxyCallable = r.evaluate(`
function fn() { return 42; }
new Proxy(fn, {});
`);