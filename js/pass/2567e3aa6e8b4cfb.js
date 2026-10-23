const r = new ShadowRealm();
const res = r.evaluate(`
  function lol() {
    arguments = 42;
return arguments;
  }
  lol;
`);
const res2 = r.evaluate('var public = 1; 42');