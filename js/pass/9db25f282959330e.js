var sum = function (a, b) {
  return this.foo + a + b;
};
var sumBound = sum.bind({
  foo: 10
}, 1);
var sumTarget = new Proxy(sumBound, {});
var sumProxy = new Proxy(sumTarget, {
  apply: null
});