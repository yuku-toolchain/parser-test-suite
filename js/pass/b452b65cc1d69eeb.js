var plainObject = {
  foo: 1,
  "0": 2,
  get bar() {},
  "1": 4
};
var plainObjectTarget = new Proxy(plainObject, {});
var plainObjectProxy = new Proxy(plainObjectTarget, {
  ownKeys: null
});