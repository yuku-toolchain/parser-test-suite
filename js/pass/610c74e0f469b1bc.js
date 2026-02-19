var plainObject = {
  get 0() {
    return 1;
  },
  foo: 2,
  set bar(_value) {}
};
var plainObjectTarget = new Proxy(plainObject, {});
var plainObjectProxy = new Proxy(plainObjectTarget, {
  get: undefined
});
var array = [1, 2, 3];
var arrayTarget = new Proxy(array, {});
var arrayProxy = new Proxy(arrayTarget, {
  get: undefined
});