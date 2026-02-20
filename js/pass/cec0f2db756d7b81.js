const r = new ShadowRealm();
const blueFn = (x, y) => x + y;
const redWrappedFn = r.evaluate(`
0, (blueWrappedFn, a, b, c) => {
    return blueWrappedFn(a, b) * c;
}
`);