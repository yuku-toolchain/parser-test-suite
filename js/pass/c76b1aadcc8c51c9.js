const r = new ShadowRealm();
r.evaluate(`
function fn() { return 42; }
globalThis.arrow = x => x * 2;
globalThis.pFn = new Proxy(fn, {
    apply() {
        pFn.used = 1;
        return 39;
    }
});
async function aFn() {
    return 1;
}
function * genFn() {
    return 1;
}
fn.x = 'secrets';
arrow.x = 'secrets';
pFn.x = 'secrets';
aFn.x = 'secrets';
genFn.x = 'secrets';
`);
const wrappedOrdinary = r.evaluate('() => fn')();
const wrappedArrow = r.evaluate('() => arrow')();
const wrappedProxied = r.evaluate('() => pFn')();
const wrappedAsync = r.evaluate('() => aFn')();
const wrappedGenerator = r.evaluate('() => genFn')();