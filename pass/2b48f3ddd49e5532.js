const r = new ShadowRealm();
r.evaluate(`
function fn() {
    return 42;
}
`);
const wrapped = r.evaluate('fn');
const otherWrapped = r.evaluate('fn');