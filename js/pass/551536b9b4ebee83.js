const r = new ShadowRealm();
const wrapped = r.evaluate(`
function fn() {
    return fn.secret;
}
fn.secret = 'confidential';
fn;
`);