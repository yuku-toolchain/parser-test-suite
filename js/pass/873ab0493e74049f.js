const r = new ShadowRealm();
const wrapped = r.evaluate(`() => { return 1; };`);
const secretObj = {
  x: 2
};
let received;
const proxiedWrapped = new Proxy(wrapped, {
  apply(target, _, args) {
    received = args;
    return target({
      x: 1
    });
  }
});