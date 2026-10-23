globalThis.myValue = 'a';
const realm1 = new ShadowRealm();
realm1.evaluate('globalThis.myValue = "b";');
const realm2Evaluate = realm1.evaluate(`
  const realm2 = new ShadowRealm();
(str) => realm2.evaluate(str);
`);
realm2Evaluate('globalThis.myValue = "c";');
realm1.evaluate('globalThis.myValue = "d"');