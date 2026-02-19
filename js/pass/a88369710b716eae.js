const r = new ShadowRealm();
const fn = r.evaluate(`
globalThis.revocable = Proxy.revocable(() => {}, {});
globalThis.revocable.proxy;
`);
r.evaluate('revocable.revoke()');